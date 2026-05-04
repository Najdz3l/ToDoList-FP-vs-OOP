import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { Input } from "@components/ui/Input";
import type { ModalStateProps } from "@/types/Modal.types";
import type { NewTaskPayload } from "@/types/TaskManager.types";

interface Props extends ModalStateProps {
  onConfirm: (newTask: NewTaskPayload) => void;
}

export const AddTaskModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = new FormData(e.currentTarget);

    const data: NewTaskPayload = {
      title: (formData.get("taskName") as string) ?? "",
      date: (formData.get("dueDate") as string) ?? "",
    };

    if (!data.title || !data.date) {
      const missingFields = [];
      if (!data.title) missingFields.push("title");
      if (!data.date) missingFields.push("date");

      console.warn("Missing required fields: ", { ...missingFields });
      return;
    }

    const newTask: NewTaskPayload = {
      title: data.title,
      date: data.date,
    };
    onConfirm(newTask);
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
        <Input
          type="date"
          placeholder="Due Date"
          name="dueDate"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
        <Button type="submit">Add Task</Button>
      </form>
    </Modal>
  );
};
