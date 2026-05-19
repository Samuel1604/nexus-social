import {useContext, createContext} from 'react'
import type {UIContextValue} from '../types/ui'

export const UIContext = createContext<UIContextValue | null>(null);
export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
};