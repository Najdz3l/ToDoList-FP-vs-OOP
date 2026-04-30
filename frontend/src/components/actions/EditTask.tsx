import "./EditTask.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { EditTaskModal } from "@components/modals/EditTaskModal";

export const EditTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickEditTask = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="edit-task">
      <Button onClick={handleOnClickEditTask}>Edit Task</Button>
      {isModalOpen && <EditTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
