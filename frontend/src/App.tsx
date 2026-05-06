import { MainLayout } from "@components/layout/MainLayout";
import { TaskManagerProvider } from "@/context/TaskManagerContext";

// Obwijamy całą aplikację w TaskManagerProvider
// TaskManagerProvider pozwala na dostęp do metod zarządzania zadaniami
// z Hook'a useTaskManager

const App = () => {
  return (
    <TaskManagerProvider>
      <MainLayout />
    </TaskManagerProvider>
  );
};

export default App;
