import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import type { ModalStateProps } from "@/types/Modal.types";
import type { TaskManagerExportFormat, TaskManagerExportResult } from "@/types/TaskManager.types";
import { useTaskManager } from "@/hooks/useTaskManager";

interface Props extends ModalStateProps {}

export const ExportModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { tasks, exportTasks } = useTaskManager();

  const onClickExport = (format: TaskManagerExportFormat) => {
    if (tasks.length === 0) {
      console.warn("No tasks to export!");
      return;
    }

    try {
      const exportResult: TaskManagerExportResult = exportTasks(format);
      const blob = new Blob([exportResult.content], { type: exportResult.mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = exportResult.filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed:", err);
    }

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
        <Button onClick={() => onClickExport("json")}>JSON</Button>
        <Button onClick={() => onClickExport("csv")}>CSV</Button>
        <Button onClick={() => onClickExport("txt")}>TXT</Button>
      </div>
    </Modal>
  );
};
