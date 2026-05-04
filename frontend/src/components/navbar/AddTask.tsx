import "./AddTask.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { AddTaskModal } from "@components/modals/AddTaskModal";
import type { NewTaskPayload } from "@/types/TaskManager.types";

interface Props {
  addTask: (task: NewTaskPayload) => void;
}

export const AddTask: React.FC<Props> = ({ addTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickAddTask = () => {
    setIsModalOpen(true);
  };

  const handleOnConfirmAddTask = (newTask: NewTaskPayload) => {
    try {
      addTask(newTask);
    } catch (error) {
      console.error("Failed to add task:", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="add-task">
      <Button onClick={handleOnClickAddTask}>Add Task</Button>
      {isModalOpen && (
        <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleOnConfirmAddTask} />
      )}
    </div>
  );
};
