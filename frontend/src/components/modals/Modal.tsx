import "./Modal.css";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { useModalContext } from "@/context/ModalContext";
import type { ModalStateProps } from "@/types/Modal.types";

interface Props extends ModalStateProps {
  children: ReactNode;
  title: string;
  description: string;
}

export const Modal: React.FC<Props> = ({ children, title, description, isOpen, onClose }) => {
  const { openModal, closeModal } = useModalContext();
  const registeredRef = useRef(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const keybinds: readonly string[] = ["escape"];

  useEffect(() => {
    if (isOpen && !registeredRef.current) {
      openModal();
      registeredRef.current = true;
    } else if (!isOpen && registeredRef.current) {
      closeModal();
      registeredRef.current = false;
    }

    return () => {
      if (registeredRef.current) {
        closeModal();
        registeredRef.current = false;
      }
    };
  }, [isOpen, openModal, closeModal]);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElementRef.current = document.activeElement as HTMLElement | null;

    const el = contentRef.current;
    if (el) {
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus();
    }

    return () => {
      try {
        previousActiveElementRef.current?.focus();
      } catch (e) {
        console.error(`Failed to restore focus to previous element: ${previousActiveElementRef.current}`, e);
      }
      previousActiveElementRef.current = null;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContentKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyPressed = e.key.toLowerCase();
    if (!keybinds.includes(keyPressed)) {
      return;
    }
    e.stopPropagation(); // Block key events from FiltersSearch component
    onClose();
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" ref={contentRef} tabIndex={-1} onKeyDown={handleContentKeyDown}>
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
