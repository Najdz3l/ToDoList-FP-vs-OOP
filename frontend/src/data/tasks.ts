import type { Task } from "@/types/TaskManager.types";

export const HARDCODED_TASKS: Task[] = [
  { taskId: "1", date: "2026-05-01", title: "Prepare demo", status: "Active" },
  { taskId: "3", date: "2026-05-03", title: "Write docs", status: "Active" },
  { taskId: "2", date: "2026-05-02", title: "Review PRs", status: "Completed" },
];
