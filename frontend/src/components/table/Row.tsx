import { Badge } from "@components/ui/Badge";
import { EditTask } from "@components/actions/EditTask";
import { DeleteTask } from "@components/actions/DeleteTask";
import { ToggleTaskStatus } from "@components/actions/ToggleTaskStatus";
import type { Task } from "@/types/TaskManager.types";

interface Props {
  task: Task;
}

export const Row: React.FC<Props> = ({ task }) => {
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
          <EditTask task={task} />
          <DeleteTask />
          <ToggleTaskStatus />
        </div>
      </td>
    </tr>
  );
};
