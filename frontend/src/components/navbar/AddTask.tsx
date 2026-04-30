import "./AddTask.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { AddTaskModal } from "@components/modals/AddTaskModal";

export const AddTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickAddTask = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="add-task">
      <Button onClick={handleOnClickAddTask}>Add Task</Button>
      {isModalOpen && <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
