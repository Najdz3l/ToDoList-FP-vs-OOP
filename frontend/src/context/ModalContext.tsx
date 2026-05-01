import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  isAnyModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const openModal = () => setCount((c) => c + 1);
  const closeModal = () => setCount((c) => Math.max(0, c - 1));

  return (
    <ModalContext.Provider value={{ isAnyModalOpen: count > 0, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextType => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModalContext must be used within a ModalProvider");
  return ctx;
};

export default ModalContext;
