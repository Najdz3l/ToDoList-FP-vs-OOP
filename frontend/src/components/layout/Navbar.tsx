import "./Navbar.css";
import { Button } from "../ui/Button";
import { Filters } from "../navbar/Filters";
import { Export } from "../navbar/Export";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar-actions">
        <Button>Add Task</Button>
        <Button>Clear Completed</Button>
      </div>

      <div className="navbar-controls">
        <Filters />
        <Export />
      </div>
    </nav>
  );
};
