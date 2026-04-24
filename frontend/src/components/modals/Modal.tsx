import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { normalizeString } from "../../utils/normalizeString.ts";

interface ModalCloseProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalProps extends ModalCloseProps {
  children: ReactNode;
  title: string;
  description: string;
}

export const Modal: React.FC<ModalProps> = ({ children, title, description, isOpen, onClose }) => {
  if (!isOpen) return;

  const handleOnClickContent = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleOnClickContent}>
        <div className="modal-header">
          {normalizeString(title)}
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{normalizeString(description)}</p>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};
