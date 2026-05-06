import "./ClearTasks.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { ClearTasksModal } from "@components/modals/ClearTasksModal";

export const ClearTasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickAddTask = () => {
    setIsModalOpen(true);
  };

  const handleOnConfirmClearTasks = () => {
    try {
      console.log("Clearing tasks");
    } catch (error) {
      console.error("Failed to clear tasks:", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="clear-tasks">
      <Button onClick={handleOnClickAddTask}>Clear Tasks</Button>
      {isModalOpen && (
        <ClearTasksModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleOnConfirmClearTasks}
        />
      )}
    </div>
  );
};
