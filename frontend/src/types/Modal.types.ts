export interface ModalStateProps {
  isOpen: boolean;
  onClose: () => void;
}

export type ModalContextType = {
  isAnyModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};
