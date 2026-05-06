import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { HARDCODED_TASKS } from "@/data/tasks";
import type { ModalStateProps } from "@/types/Modal.types";
import type { TaskManagerExportFormat, TaskManagerExportResult } from "@/types/TaskManager.types";
interface Props extends ModalStateProps {}

export const ExportModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const onClickExport = (format: TaskManagerExportFormat) => {
    const tasks = HARDCODED_TASKS;
    if (tasks.length === 0) {
      console.warn("No tasks to export!");
      return;
    }

    try {
      const selected = tasks.map((task) => ({ date: task.date, title: task.title, status: task.status }));
      let content = "";
      let filename = "";
      let mime = "text/plain";

      if (format === "json") {
        content = JSON.stringify(selected, null, 2);
        filename = `tasks-${new Date().toISOString().split("T")[0]}.json`;
        mime = "application/json";
      } else if (format === "csv") {
        const escape = (v: string) => {
          if (v == null) return "";
          const s = String(v);
          if (s.includes(",") || s.includes("\n") || s.includes('"')) {
            return `"${s.replace(/"/g, '""')}"`;
          }
          return s;
        };
        const header = ["date", "title", "status"].join(",");
        const rows = selected.map((r) => [escape(r.date), escape(r.title), escape(r.status)].join(",")).join("\n");
        content = `${header}\n${rows}`;
        filename = `tasks-${new Date().toISOString().split("T")[0]}.csv`;
        mime = "text/csv";
      } else {
        const txtHeader = "date | title | status";
        const txtBody = selected.map((r) => `${r.date} | ${r.title} | ${r.status}`).join("\n");
        content = `${txtHeader}\n${txtBody}`;
        filename = `tasks-${new Date().toISOString().split("T")[0]}.txt`;
      }

      const exportResult: TaskManagerExportResult = {
        content,
        mime,
        filename,
      };
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
