import "./ClearTasks.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { ClearTasksModal } from "@components/modals/ClearTasksModal";

interface Props {
  clearTasks: () => void;
}

export const ClearTasks: React.FC<Props> = ({ clearTasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickAddTask = () => {
    setIsModalOpen(true);
  };

  const handleOnConfirmClearTasks = () => {
    try {
      clearTasks();
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
