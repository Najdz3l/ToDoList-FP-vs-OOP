import "./ClearTasks.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { ClearTasksModal } from "@components/modals/ClearTasksModal";

export const ClearTasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickAddTask = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="clear-tasks">
      <Button onClick={handleOnClickAddTask}>Clear Tasks</Button>
      {isModalOpen && <ClearTasksModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
