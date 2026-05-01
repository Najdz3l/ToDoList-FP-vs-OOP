import type { TaskStatus } from "@/types/TaskManager.types";
import "./Badge.css";

interface Props {
  status: TaskStatus;
}

export const Badge: React.FC<Props> = ({ status }) => {
  return <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>;
};
