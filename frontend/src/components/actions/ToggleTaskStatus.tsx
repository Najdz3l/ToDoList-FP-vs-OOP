import "./ToggleTaskStatus.css";
import { Button } from "@components/ui/Button";

export const ToggleTaskStatus = () => {
  const handleOnClickToggleStatus = () => {
    console.log("Toggle Task Status clicked");
    // ToDo: Implement actual toggle task status logic here
  };

  return (
    <div className="toggle-task-status">
      <Button onClick={handleOnClickToggleStatus}>Toggle Status</Button>
    </div>
  );
};
