import "./EditTask.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { EditTaskModal } from "@components/modals/EditTaskModal";

interface EditFields {
  date: string;
  title: string;
  status: string;
}

interface Props {
  taskId: string;
  updateTask: (taskId: string, updatedFields: Partial<EditFields>) => void | Promise<void>;
}

export const EditTask = ({ taskId, updateTask }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickEditTask = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="edit-task">
      <Button onClick={handleOnClickEditTask}>Edit Task</Button>
      {isModalOpen && (
        <EditTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={updateTask}
          taskId={taskId}
        />
      )}
    </div>
  );
};
