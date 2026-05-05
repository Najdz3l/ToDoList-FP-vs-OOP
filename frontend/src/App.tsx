import { MainLayout } from "@components/layout/MainLayout";
import { TaskManagerProvider } from "@/context/TaskManagerContext";

const App = () => {
  return (
    <TaskManagerProvider>
      <MainLayout />
    </TaskManagerProvider>
  );
};

export default App;
