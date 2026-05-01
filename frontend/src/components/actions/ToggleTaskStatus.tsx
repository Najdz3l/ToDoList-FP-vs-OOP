import "./ToggleTaskStatus.css";
import { Button } from "@components/ui/Button";

interface Props {
  taskId: string;
  toggleStatus: (taskId: string) => void;
}

export const ToggleTaskStatus: React.FC<Props> = ({ taskId, toggleStatus: toggleStatus }) => {
  const handleOnClick = () => {
    try {
      toggleStatus(taskId);
    } catch (error) {
      console.error("Failed to toggle task status:", error);
    }
  };

  return (
    <div className="toggle-task-status">
      <Button onClick={handleOnClick}>Toggle Status</Button>
    </div>
  );
};
