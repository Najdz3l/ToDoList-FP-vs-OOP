import "./Modal.css";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalStateProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalProps extends ModalStateProps {
  children: ReactNode;
  title: string;
  description: string;
}

export const Modal: React.FC<ModalProps> = ({ children, title, description, isOpen, onClose }) => {
  if (!isOpen) return;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          {title}
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{description}</p>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};
