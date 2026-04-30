import "./Export.css";
import { useState } from "react";
import { Button } from "@components/ui/Button";
import { ExportModal } from "@components/modals/ExportModal";

export const Export = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickExport = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="export">
      <Button onClick={handleOnClickExport}>Export</Button>
      {isModalOpen && <ExportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
