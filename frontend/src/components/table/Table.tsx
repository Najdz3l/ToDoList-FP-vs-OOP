import "./Table.css";
import { Row } from "./Row";

export const Table = () => {
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
          <Row date="2004-12-18" title="Buy groceries" description="Go to the store" status="Active" />
          <Row date="2006-04-10" title="Walk the dog" description="Take the dog for a walk" status="Completed" />
        </tbody>
      </table>
    </main>
  );
};
