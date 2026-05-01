import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { Input } from "@components/ui/Input";
import type { ModalStateProps } from "@/types/Modal.types";

interface Props extends ModalStateProps {}

export const AddTaskModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting new task...");
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    // ToDo: Implement actual add task logic here
    onClose();
  };

  return (
    <Modal
      title="Add Task"
      description="Enter the details for your new task:"
      isOpen={isOpen}
      onClose={() => onClose()}
    >
      <form className="add-task-form" onSubmit={onSubmit}>
        <Input placeholder="Task Name" name="taskName" />
        {/* ToDo: Icon Input, Get svg's */}
        <Input type="date" placeholder="Due Date" name="dueDate" />
        <Button type="submit">Add Task</Button>
      </form>
    </Modal>
  );
};
