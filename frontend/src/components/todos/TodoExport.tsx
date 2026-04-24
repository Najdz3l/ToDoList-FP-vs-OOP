import { useState } from "react";
import { Button } from "../ui/Button";
import { TodoExportModal } from "./TodoExportModal";

export const TodoExport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnExport = (e: React.MouseEvent<HTMLElement>) => {
    setIsModalOpen(true);
    console.log("handleOnExport triggered", e);
  };

  return (
    <div className="todo-export">
      <Button buttonText="Export" buttonAltText="Export Button" onClick={() => handleOnExport} />

      <TodoExportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
