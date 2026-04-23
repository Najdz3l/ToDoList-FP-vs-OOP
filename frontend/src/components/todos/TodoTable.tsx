import "./TodoTable.css";
import { TodoRow } from "./TodoRow";

export const TodoTable = () => {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Icon</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <TodoRow date="2023-10-01" title="Buy groceries" description="Go to the store" status="Active" />
          <TodoRow date="2023-10-02" title="Walk the dog" description="Take the dog for a walk" status="Completed" />
        </tbody>
      </table>
    </main>
  );
};
