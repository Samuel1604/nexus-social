import { useState, useCallback } from "react";
import {UIContext} from '../hooks/useUI'



export function UIProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<unknown>(null);

  // loginPrompt carries the "reason" text shown in the prompt modal
  const [loginPrompt, setLoginPrompt] = useState<{ action: string } | null>(
    null,
  ); // null | { action: string }

  const openModal = useCallback(
    (modalName: string | null, data?: unknown) => {
      setActiveModal(modalName);
      setModalData(data ?? null);
    },
    [],
  );

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setModalData(null);
  }, []);

  // Show the "sign in to continue" prompt
  const promptLogin = useCallback((action = "do that") => {
    setLoginPrompt({ action });
  }, []);

  const closeLoginPrompt = useCallback(() => setLoginPrompt(null), []);

  const toggleSidebar = useCallback(() => setSidebarOpen((p) => !p), []);

  return (
    <UIContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        setSidebarOpen,
        activeModal,
        modalData,
        openModal,
        closeModal,
        loginPrompt,
        promptLogin,
        closeLoginPrompt,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}



// NOTE: For Fast Refresh reliability, keep this file's runtime exports limited to UIProvider.
// Shared hooks and helpers like `useUI` should be moved to a separate module.
