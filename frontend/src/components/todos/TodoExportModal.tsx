import "./TodoExportModal.css";
import { Button } from "../ui/Button";
import { Modal } from "../modals/Modal";

interface TodoExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TodoExportModal = ({ isOpen, onClose: onClose }: TodoExportModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal title="Modal Title" description="Modal Description" isOpen={isOpen} onClose={() => onClose()}>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Export Tasks</h2>
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>Choose the format you want to export your tasks to:</p>
            <div className="export-buttons">
              <Button buttonText="JSON" buttonAltText="Export as JSON" />
              <Button buttonText="CSV" buttonAltText="Export as CSV" />
              <Button buttonText="TXT" buttonAltText="Export as TXT" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
