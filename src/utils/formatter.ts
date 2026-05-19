import type { User } from "../types/auth";

/**
 * Formatter large numbers: 1400 => 1.4K, 21000000 => 21M
 * @param num number to format
 * @returns formatted string
 */
export const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

/**
 * Relative time: "5 min ago", "2 hrs ago", "3 days ago", etc
 * @param date date to format
 * @returns formatted string
 */

export const timeAgo = (date: Date): string => {
  const diff = (Date.now() - new Date(date).getTime()) / 1000;
  if (diff < 60) {
    return `${Math.floor(diff)}s ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)}m ago`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)}h ago`;
  } else {
    return `${Math.floor(diff / 86400)}d ago`;
  }
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

/**
 * Generate user's Display name
 */

export const displayName = (user: User) => {
  if (!user) return "Unknown";
  if (user.firstName && user.lastName)
    return `${user.firstName} ${user.lastName}`;
  return user.firstName || user.username || "User";
};

/**
 * Generate Avatar initial
 */

export const initials = (name = "") => {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

/**
 * Truncate long text -> text ...
 */

export const clamp = (text: string, max = 120) => {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max).trim()}...` : text;
};
