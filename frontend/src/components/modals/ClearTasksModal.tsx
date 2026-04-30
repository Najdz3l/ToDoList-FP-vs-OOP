import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { Input } from "@components/ui/Input";

interface ClearTasksModalStateProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClearTasksModal = ({ isOpen, onClose }: ClearTasksModalStateProps) => {
  if (!isOpen) return null;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting clear tasks...");
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    // ToDo: Implement actual clear tasks logic here
    onClose();
  };

  return (
    <Modal
      title="Clear Tasks"
      description="Are you sure you want to clear all completed tasks?"
      isOpen={isOpen}
      onClose={() => onClose()}
    >
      <form className="clear-tasks-form" onSubmit={onSubmit}>
        <div>
          {/* ToDo, include active tasks */}
          <label>I understand the consequences</label>
          <Input type="checkbox" />
        </div>
        <Button type="submit">Yes, Clear Completed</Button>
      </form>
    </Modal>
  );
};
