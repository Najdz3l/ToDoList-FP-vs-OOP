import "./DeleteTask.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { DeleteTaskModal } from "@components/modals/DeleteTaskModal";
import { Icon } from "@components/ui/Icon";
import deleteSvg from "@assets/icons/ui/delete.svg";

interface Props {
  taskId: string;
  deleteTask: (taskId: string) => void;
}

export const DeleteTask: React.FC<Props> = ({ taskId, deleteTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClick = () => {
    setIsModalOpen(true);
  };

  const handleOnConfirmDelete = () => {
    try {
      deleteTask(taskId);
    } catch (error) {
      console.error("Failed to delete task:", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="delete-task">
      <Button onClick={handleOnClick}>
        <Icon svg={deleteSvg} altText="Delete Task" />
        <span>Delete</span>
      </Button>
      {isModalOpen && (
        <DeleteTaskModal isOpen onClose={() => setIsModalOpen(false)} onConfirm={handleOnConfirmDelete} />
      )}
    </div>
  );
};
