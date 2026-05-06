import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { Input } from "@components/ui/Input";
import type { ModalStateProps } from "@/types/Modal.types";
import type { Task } from "@/types/TaskManager.types";

interface Props extends ModalStateProps {
  task?: Task | undefined;
}

export const EditTaskModal: React.FC<Props> = ({ isOpen, onClose, task }) => {
  if (!isOpen) return null;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form Data:", {
      taskName: formData.get("taskName"),
      dueDate: formData.get("dueDate"),
    });
    console.log("Task updated successfully");
    onClose();
  };

  return (
    <Modal title="Edit Task" description="Update the details for your task:" isOpen={isOpen} onClose={() => onClose()}>
      <form className="add-task-form" onSubmit={onSubmit}>
        <div className="input-container">
          <Input placeholder="Task Name" name="taskName" defaultValue={task?.title || ""} />
          <Input type="date" placeholder="Due Date" name="dueDate" defaultValue={task?.date || ""} />
        </div>
        <div className="button-container">
          <Button type="submit">Edit Task</Button>
        </div>
      </form>
    </Modal>
  );
};
