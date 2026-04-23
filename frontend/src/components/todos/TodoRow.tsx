import { Badge } from "../ui/Badge";
import { IconButton } from "../ui/IconButton";

interface TodoRowProps {
  date: string;
  title: string;
  description: string;
  status: string;
}

export const TodoRow = ({ date, title, description, status }: TodoRowProps) => {
  return (
    <tr>
      <td>{date}</td>
      <td>Icon</td>
      <td>
        <p>{title}</p>
        <span style={{ color: "grey", fontSize: "0.8em" }}>{description}</span>
      </td>
      <td>
        <Badge status={status} />
      </td>
      <td>
        <div className="actions-cell">
          <IconButton>Edit</IconButton>
          <IconButton>Delete</IconButton>
          <IconButton>Toggle Status</IconButton>
        </div>
      </td>
    </tr>
  );
};
