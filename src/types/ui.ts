export interface UIContextValue {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeModal: string | null;
  modalData: unknown;
  openModal: (modalName: string | null, data?: unknown) => void;
  closeModal: () => void;
  loginPrompt: { action: string } | null;
  promptLogin: (action?: string) => void;
  closeLoginPrompt: () => void;
}
