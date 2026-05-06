import "./ToggleTaskStatus.css";
import { Button } from "@components/ui/Button";
import noteDoneSvg from "@assets/icons/ui/note-done.svg";
import { Icon } from "@components/ui/Icon";

export const ToggleTaskStatus = () => {
  const handleOnClick = () => {
    try {
      console.log("Task status toggled successfully");
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
