import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p>&copy; 2026 ToDoList App.</p>
      {/* Authors :3 */}
      <p>
        Created by:{" "}
        <a href="https://github.com/Najdz3l" target="_blank" rel="noopener noreferrer">
          Najdz3l
        </a>{" "}
        &{" "}
        <a href="https://github.com/Sachiko7552" target="_blank" rel="noopener noreferrer">
          Sachiko7552
        </a>
      </p>
      <p>
        Repozytorium projektu:{" "}
        <a href="https://github.com/Najdz3l/ToDoList-FP-vs-OOP" target="_blank" rel="noopener noreferrer">
          ToDoList-FP-vs-OOP
        </a>
      </p>
    </footer>
  );
};
