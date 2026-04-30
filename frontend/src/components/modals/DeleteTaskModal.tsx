import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";

interface DeleteTaskModalStateProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DeleteTaskModalProps extends DeleteTaskModalStateProps {
  onConfirm: (e: React.SubmitEvent<HTMLFormElement>) => void | Promise<void>;
}

export const DeleteTaskModal = ({ isOpen, onClose, onConfirm }: DeleteTaskModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal
      title="Delete Task"
      description="Are you sure you want to delete this task?"
      isOpen={isOpen}
      onClose={() => onClose()}
    >
      <>
        <p>You can't undo this action.</p>
        <form className="add-task-form" onSubmit={onConfirm}>
          <Button type="submit">Delete Task</Button>
        </form>
      </>
    </Modal>
  );
};
