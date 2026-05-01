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

export const Row = ({ task, deleteTask, updateTask, toggleStatus }: Props) => {
  return (
    <tr>
      <td>{task.date}</td>
      <td>Icon</td>
      <td>
        <h4>{task.title}</h4>
      </td>
      <td>
        <Badge status={task.status} />
      </td>
      <td>
        <EditTask taskId={task.taskId} updateTask={updateTask} />
        <DeleteTask taskId={task.taskId} deleteTask={deleteTask} />
        <ToggleTaskStatus taskId={task.taskId} toggleStatus={toggleStatus} />
      </td>
    </tr>
  );
};
