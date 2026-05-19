import { useState, useMemo } from "react";
import type {Search} from '../types/social'

// ── useSearch ─────────────────────────────────────────────────────────────────
/**
 * Generic multi-field search + filter hook.
 * @param {Array} items - array of items to search
 * @param {Object} config - { fields: ['name', 'city', ...], filterKey: 'occupation', defaultFilter: 'all' }
 */
export function useSearch({items, config}: Search) {
  const { fields = ["firstName", "lastName"], filterKey = null } = config;

  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return items?.filter((item) => {
      // Search across multiple nested fields
      const matchesSearch =
        !q ||
        fields.some((field) => {
          const parts = field.split(".");
          let val: unknown = item;
          for (const p of parts) {
            if (typeof val !== "object" || val == null) {
              val = undefined;
              break;
            }
            val = (val as Record<string, unknown>)[p];
            if (val == null) break;
          }

          return String(val || "")
            .toLowerCase()
            .includes(q);
        });

      // Optional category filter
      const matchesFilter =
        !filterKey ||
        filterValue === "all" ||
        String(item[filterKey] || "").toLowerCase() ===
          filterValue.toLowerCase();

      return matchesSearch && matchesFilter;
    });
  }, [items, searchTerm, filterValue, fields, filterKey]);

  const clearSearch = () => {
    setSearchTerm("");
    setFilterValue("all");
  };

  return {
    searchTerm,
    setSearchTerm,
    filterValue,
    setFilterValue,
    filtered,
    clearSearch,
  };
}

// ── usePagination ──────────────────────────────────────────────────────────────
/**
 * Handles client-side pagination.
 * @param {Array} items - filtered array
 * @param {number} perPage - items per page
 */
export function usePagination<T>(items: T[] = [], perPage = 8) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(page, totalPages);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, currentPage, perPage]);

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));
  const next = () => goTo(currentPage + 1);
  const prev = () => goTo(currentPage - 1);
  const reset = () => setPage(1);

  return { page: currentPage, totalPages, currentItems, goTo, next, prev, reset };
}
