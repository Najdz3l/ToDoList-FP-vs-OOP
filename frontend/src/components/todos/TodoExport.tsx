import { useState } from "react";
import { Button } from "../ui/Button";
import { TodoExportModal } from "./TodoExportModal";

export const TodoExport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="todo-export">
      <Button buttonText="Export" buttonAltText="Export Button" onClick={() => setIsModalOpen(true)} />

      <TodoExportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
