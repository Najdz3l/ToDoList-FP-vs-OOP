import "./EditTask.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { EditTaskModal } from "@components/modals/EditTaskModal";
import type { Task } from "@/types/TaskManager.types";
import type { EditFields } from "@/types/EditFields.types";

interface Props {
  task: Task;
  updateTask: (taskId: string, updatedFields: Partial<EditFields>) => void;
}

export const EditTask: React.FC<Props> = ({ task, updateTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickEditTask = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="edit-task">
      <Button onClick={handleOnClickEditTask}>Edit Task</Button>
      {isModalOpen && (
        <EditTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onUpdate={updateTask} task={task} />
      )}
    </div>
  );
};
