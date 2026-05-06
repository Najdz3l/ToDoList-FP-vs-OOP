import "./EditTask.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { EditTaskModal } from "@components/modals/EditTaskModal";
import { Icon } from "@components/ui/Icon";
import edit from "@assets/icons/ui/edit.svg";
import type { Task } from "@/types/TaskManager.types";

interface Props {
  task?: Task;
}

export const EditTask: React.FC<Props> = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickEditTask = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="edit-task">
      <Button onClick={handleOnClickEditTask}>
        <Icon svg={edit} altText="Edit Task" />
        <span>Edit</span>
      </Button>
      {isModalOpen && <EditTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} task={task} />}
    </div>
  );
};
