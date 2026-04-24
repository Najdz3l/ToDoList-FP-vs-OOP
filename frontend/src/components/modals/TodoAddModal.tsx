import { Button } from "../ui/Button";
import { Modal } from "./Modal";
import "./TodoExportModal.css";

interface TodoAddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TodoExportModal = ({ isOpen, onClose }: TodoAddModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal title="TodoAddModal Title" description="TodoAddModal Description" isOpen={isOpen} onClose={() => onClose()}>
      <>
        <div className="export-buttons">
          <Button id="add-todo-button" buttonText="Dodaj" buttonAltText="Przycisk dodawania zadania do listy" />
        </div>
        <p>123</p>
      </>
    </Modal>
  );
};
