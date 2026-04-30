import "./DeleteTask.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { DeleteTaskModal } from "@components/modals/DeleteTaskModal";

interface DeleteTaskProps {
  taskId: number;
  onDelete: (taskId: number) => void | Promise<void>;
}

export const DeleteTask = ({ taskId, onDelete }: DeleteTaskProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOnClickDeleteTask = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsDeleting(true);
    try {
      await onDelete(taskId);
    } finally {
      setIsDeleting(false);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="delete-task">
      <Button onClick={handleOnClickDeleteTask} disabled={isDeleting}>
        Delete Task
      </Button>
      {isModalOpen && <DeleteTaskModal isOpen onClose={() => setIsModalOpen(false)} onConfirm={handleConfirmDelete} />}
    </div>
  );
};
