import "./TodoNavbar.css";
import { Button } from "../ui/Button";
import { TodoFilters } from "./TodoFilters";
import { TodoExport } from "./TodoExport";

export const TodoNavbar = () => {
  return (
    <nav className="todo-navbar">
      <div className="navbar-actions">
        <Button buttonText="Add Task" buttonAltText="Add Task Button" />
        <Button buttonText="Clear Completed" buttonAltText="Clear Completed Button" />
      </div>

      <div className="navbar-controls">
        <TodoFilters />
        <TodoExport />
      </div>
    </nav>
  );
};
