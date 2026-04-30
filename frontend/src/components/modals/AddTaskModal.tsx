import { Button } from "../ui/Button";
import { Modal } from "./Modal";
import "./AddTaskModal.css";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddTaskModal = ({ isOpen, onClose }: AddTaskModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal title="Add Task" description="Add a new task" isOpen={isOpen} onClose={() => onClose()}>
      <>
        <div className="export-buttons">
          <Button>Add Task</Button>
        </div>
        <p>123</p>
      </>
    </Modal>
  );
};
