import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { Input } from "@components/ui/Input";

interface EditTaskModalStateProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditTaskModal = ({ isOpen, onClose }: EditTaskModalStateProps) => {
  if (!isOpen) return null;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting changes...");
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    // ToDo: Implement actual edit task logic here
    onClose();
  };

  return (
    <Modal title="Edit Task" description="Update the details for your task:" isOpen={isOpen} onClose={() => onClose()}>
      <form className="add-task-form" onSubmit={onSubmit}>
        <Input placeholder="Task Name" name="taskName" />
        {/* ToDo: Icon Input, Get svg's */}
        <Input type="date" placeholder="Due Date" name="dueDate" />
        <Button type="submit">Edit Task</Button>
      </form>
    </Modal>
  );
};
