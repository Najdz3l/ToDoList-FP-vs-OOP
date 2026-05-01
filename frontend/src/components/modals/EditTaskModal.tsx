import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { Input } from "@components/ui/Input";

interface EditFields {
  date: string;
  title: string;
  status: string;
}

interface EditTaskModalStateProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EditTaskModalProps extends EditTaskModalStateProps {
  onUpdate: (taskId: string, updatedFields: Partial<EditFields>) => void | Promise<void>;
  taskId: string;
}

export const EditTaskModal = ({ isOpen, onClose, onUpdate, taskId }: EditTaskModalProps) => {
  if (!isOpen) return null;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting changes...");
    const formData = new FormData(e.currentTarget);

    onUpdate(taskId, {
      date: formData.get("dueDate") as string,
      title: formData.get("taskName") as string,
      status: formData.get("status") as string,
    });
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
