import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { Input } from "@components/ui/Input";
import type { Task } from "@/types/TaskManager.types";

interface EditFields {
  date: string;
  title: string;
  status: string;
}

interface ModalStateProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Props extends ModalStateProps {
  task: Task;
  onUpdate: (taskId: string, updatedFields: Partial<EditFields>) => void | Promise<void>;
}

export const EditTaskModal = ({ task, onUpdate, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    onUpdate(task.taskId, {
      date: formData.get("dueDate") as string,
      title: formData.get("taskName") as string,
    });
    onClose();
  };

  return (
    <Modal title="Edit Task" description="Update the details for your task:" isOpen={isOpen} onClose={() => onClose()}>
      <form className="add-task-form" onSubmit={onSubmit}>
        <Input placeholder="Task Name" name="taskName" defaultValue={task.title} />
        {/* ToDo: Icon Input, Get svg's */}
        <Input type="date" placeholder="Due Date" name="dueDate" defaultValue={task.date} />
        <Button type="submit">Edit Task</Button>
      </form>
    </Modal>
  );
};
