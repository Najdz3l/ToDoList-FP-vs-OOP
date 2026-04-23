import { MainLayout } from "./components/layout/MainLayout";
import { TodoHeader } from "./components/todos/TodoHeader";
import { TodoNavbar } from "./components/todos/TodoNavbar";
import { TodoTable } from "./components/todos/TodoTable";

const App = () => {
  return (
    <MainLayout>
      <TodoHeader />
      <TodoNavbar />
      <TodoTable />
    </MainLayout>
  );
};

export default App;
