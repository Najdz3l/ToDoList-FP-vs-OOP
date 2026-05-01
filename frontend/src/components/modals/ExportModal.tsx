import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import type { ModalStateProps } from "@/types/Modal.types";

interface Props extends ModalStateProps {}

export const ExportModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const onClickExport = (format: string) => {
    console.log(`Exporting tasks in ${format} format...`);
    // ToDo: Implement actual export logic here
    onClose();
  };

  return (
    <Modal
      title="Export Tasks"
      description="Choose the format you want to export your tasks to:"
      isOpen={isOpen}
      onClose={() => onClose()}
    >
      <div className="export-buttons">
        <Button onClick={() => onClickExport("JSON")}>JSON</Button>
        <Button onClick={() => onClickExport("CSV")}>CSV</Button>
        <Button onClick={() => onClickExport("TXT")}>TXT</Button>
      </div>
    </Modal>
  );
};
