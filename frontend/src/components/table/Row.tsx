import { Badge } from "@components/ui/Badge";
import { EditTask } from "@components/actions/EditTask";
import { DeleteTask } from "@components/actions/DeleteTask";
import { ToggleTaskStatus } from "@components/actions/ToggleTaskStatus";
import type { Task } from "@/types/TaskManager.types";

interface Props {
  task: Task;
  deleteTask: (taskId: string) => void;
  updateTask: (taskId: string, patch: Partial<Task>) => void;
  toggleStatus: (taskId: string) => void;
}

export const Row: React.FC<Props> = ({ task, deleteTask, updateTask, toggleStatus }) => {
  return (
    <tr>
      <td>{task.date}</td>
      <td>
        <h4>{task.title}</h4>
      </td>
      <td>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Badge status={task.status} />
        </div>
      </td>
      <td>
        <div className="actions-cell">
          <EditTask task={task} updateTask={updateTask} />
          <DeleteTask taskId={task.taskId} deleteTask={deleteTask} />
          <ToggleTaskStatus taskId={task.taskId} toggleStatus={toggleStatus} />
        </div>
      </td>
    </tr>
  );
};
