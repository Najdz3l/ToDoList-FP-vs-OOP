import { useState } from "react";
import { Button } from "../ui/Button";
import { ExportModal } from "../modals/ExportModal";

export const Export = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnExport = (e: React.MouseEvent<HTMLElement>) => {
    setIsModalOpen(true);
    console.log("handleOnExport triggered", e);
  };

  return (
    <div className="todo-export">
      <Button onClick={() => handleOnExport}>Export</Button>

      <ExportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
