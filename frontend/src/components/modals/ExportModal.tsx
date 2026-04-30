import "./ExportModal.css";
import { Button } from "../ui/Button";
import { Modal } from "./Modal";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal = ({ isOpen, onClose: onClose }: ExportModalProps) => {
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
              <Button>JSON</Button>
              <Button>CSV</Button>
              <Button>TXT</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
