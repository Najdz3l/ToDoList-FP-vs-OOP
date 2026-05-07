import "./ToggleTaskStatus.css";
import { Button } from "@components/ui/Button";
import noteDoneSvg from "@assets/icons/ui/note-done.svg";
import { Icon } from "@components/ui/Icon";

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
      <Button onClick={handleOnClick}>
        <Icon svg={noteDoneSvg} altText="Toggle Task Status" />
        <span>Toggle Status</span>
      </Button>
    </div>
  );
};
