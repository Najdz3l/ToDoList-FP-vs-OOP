import { Badge } from "@components/ui/Badge";
import { EditTask } from "@components/actions/EditTask";
import { DeleteTask } from "@components/actions/DeleteTask";
import { ToggleTaskStatus } from "@components/actions/ToggleTaskStatus";

interface RowProps {
  date: string;
  title: string;
  status: string;
  taskId: number;
  onDelete: (taskId: number) => void;
}

export const Row = ({ date, title, status, taskId, onDelete }: RowProps) => {
  return (
    <tr>
      <td>{date}</td>
      <td>Icon</td>
      <td>
        <h4>{title}</h4>
      </td>
      <td>
        <Badge status={status} />
      </td>
      <td>
        <div className="actions-cell">
          <EditTask />
          <DeleteTask onDelete={onDelete} taskId={taskId} />
          <ToggleTaskStatus />
        </div>
      </td>
    </tr>
  );
};
