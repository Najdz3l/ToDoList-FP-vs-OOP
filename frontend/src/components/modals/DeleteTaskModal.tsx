import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteTaskModal = ({ isOpen, onClose, onConfirm }: Props) => {
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
