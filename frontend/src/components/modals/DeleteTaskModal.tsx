import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import type { ModalStateProps } from "@/types/Modal.types";

interface Props extends ModalStateProps {
  onConfirm: () => void;
}

export const DeleteTaskModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <Modal
      title="Delete Task"
      description="Are you sure you want to delete this task?"
      isOpen={isOpen}
      onClose={() => onClose()}
    >
      <>
        <p>You can't undo this action.</p>
        <form className="add-task-form" onSubmit={onSubmit}>
          <Button type="submit">Delete Task</Button>
        </form>
      </>
    </Modal>
  );
};
