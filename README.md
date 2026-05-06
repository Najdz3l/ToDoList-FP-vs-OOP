# ToDoList Application

**[🇵🇱 POLSKA WERSJA PONIŻEJ](#polska-wersja) | [🇬🇧 ENGLISH BELOW](#english-version)**

---

## 🇵🇱 POLSKA WERSJA

# Aplikacja ToDoList

Minimalistyczna aplikacja Todo zbudowana na **React + TypeScript + Vite**. Ten branch pełni rolę **szablonu** z gotowym UI i stylizacją, ale **bez żadnej logiki biznesowej** — gotowa do implementacji własnej architektury (OOP, FP, lub inny paradygmat).

### 📋 Funkcjonalności

- ✅ Wyświetlanie hardcoded'owanych zadań (3 przykładowe)
- ✅ Tabela zadań ze statusami
- ✅ Eksport do JSON, CSV, TXT
- ✅ Okna modalne do add/edit/delete/clear
- ✅ Przyciski akcji (bez logiki)
- ✅ Responsywny layout z nawigacją

### 📁 Struktura Projektu

```
frontend/src/
├── assets/
│   └── icons/
│       ├── tasks/        # Ikony kategorii zadań
│       └── ui/           # Ikony UI
├── components/
│   ├── actions/          # Przyciski akcji (bez logiki)
│   │   ├── DeleteTask.tsx
│   │   ├── EditTask.tsx
│   │   └── ToggleTaskStatus.tsx
│   ├── layout/           # Komponenty layoutu
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   ├── modals/           # Okna modalne
│   │   ├── Modal.tsx
│   │   ├── AddTaskModal.tsx
│   │   ├── EditTaskModal.tsx
│   │   ├── DeleteTaskModal.tsx
│   │   ├── ClearTasksModal.tsx
│   │   └── ExportModal.tsx
│   ├── navbar/           # Komponenty navbaru
│   │   ├── AddTask.tsx
│   │   ├── ClearTasks.tsx
│   │   ├── Export.tsx
│   │   ├── Filters.tsx
│   │   ├── FiltersSearch.tsx
│   │   └── FiltersSelect.tsx
│   ├── table/            # Tabela z zadaniami
│   │   ├── Table.tsx     # Wyświetla hardcoded'owane zadania
│   │   └── Row.tsx       # Wiersz zadania z akcjami
│   └── ui/               # Komponenty UI
│       ├── Badge.tsx     # Badge statusu
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Icon.tsx
│       └── Select.tsx
├── data/
│   └── tasks.ts          # 📌 Zadania (3 szt, posortowane)
├── types/
│   ├── TaskManager.types.ts
│   ├── Modal.types.ts
│   └── FilterOption.types.ts
├── App.tsx
├── index.css
└── main.tsx
```

### 🚀 Szybki Start

**Lokalne (npm):**

```bash
cd frontend
npm install
npm run dev
```

Aplikacja dostępna pod `http://localhost:8080`

**Docker:**

```bash
docker compose up
```

Aplikacja dostępna pod `http://localhost:8080`

### 📝 Struktura Zadań

Wszystkie zadania w `src/data/tasks.ts`:

```typescript
export const HARDCODED_TASKS: Task[] = [
  { taskId: "1", date: "2026-05-01", title: "Prepare demo", status: "Active" },
  { taskId: "3", date: "2026-05-03", title: "Write docs", status: "Active" },
  { taskId: "2", date: "2026-05-02", title: "Review PRs", status: "Completed" },
];
```

**Sortowanie**: Aktywne zadania (po dacie), potem Ukończone.

### 🎯 O tym Branchu

Brak logiki biznesowej! To szablon do implementacji:

- **OOP**: Klasy TaskManager, TaskStore itp.
- **FP**: Pure functions, reducers, custom hooks
- **State Management**: Redux, Zustand, Jotai, MobX
- **Backend**: API calls
- **Local Storage**: Persist w przeglądarce

Wszystkie komponenty UI i style są gotowe. **Tylko zaimplementuj logikę!**

### 🛠️ Dostępne Akcje (tylko UI)

- ➕ **Dodaj Zadanie** — Modal (bez persist)
- ✏️ **Edytuj** — Wyświetla dane (bez persist)
- 🗑️ **Usuń** — Modal potwierdzenia (no-op)
- ✅ **Toggle Status** — Przycisk (no-op)
- 📤 **Wyczyść Wszystko** — Modal (no-op)
- 💾 **Eksportuj** — JSON/CSV/TXT

---

## 🇬🇧 ENGLISH VERSION {#english-version}

# ToDoList Application

A minimalist Todo application built with **React + TypeScript + Vite**. This branch serves as a **template** with UI and styling but **zero business logic** — ready for you to implement your own architecture (OOP, FP, or any other paradigm).

- ✅ Hardcoded tasks display (3 sample tasks)
- ✅ Task table with status badges
- ✅ Export functionality (JSON, CSV, TXT)
- ✅ Modal dialogs for add/edit/delete/clear operations
- ✅ UI-only action buttons (no backend logic)
- ✅ Responsive layout with organized navigation

## 📁 Project Structure

```
frontend/src/
├── assets/
│   └── icons/
│       ├── tasks/        # Task category icons (noodles, birthday, paint, pencil, call)
│       └── ui/           # UI icons (delete, edit, search, filter, note-done, github)
├── components/
│   ├── actions/          # Action buttons (no business logic)
│   │   ├── DeleteTask.tsx
│   │   ├── EditTask.tsx
│   │   └── ToggleTaskStatus.tsx
│   ├── layout/           # Main layout components
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   ├── modals/           # Modal dialogs (show form state, no persistence)
│   │   ├── Modal.tsx
│   │   ├── AddTaskModal.tsx
│   │   ├── EditTaskModal.tsx
│   │   ├── DeleteTaskModal.tsx
│   │   ├── ClearTasksModal.tsx
│   │   └── ExportModal.tsx
│   ├── navbar/           # Navbar components
│   │   ├── AddTask.tsx
│   │   ├── ClearTasks.tsx
│   │   ├── Export.tsx
│   │   ├── Filters.tsx
│   │   ├── FiltersSearch.tsx
│   │   └── FiltersSelect.tsx
│   ├── table/            # Data table components
│   │   ├── Table.tsx     # Displays hardcoded tasks
│   │   └── Row.tsx       # Task row with actions
│   └── ui/               # Reusable UI components
│       ├── Badge.tsx     # Status badge
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Icon.tsx
│       └── Select.tsx
├── data/
│   └── tasks.ts          # 📌 Hardcoded tasks (3 sample tasks sorted by status & date)
├── types/
│   ├── TaskManager.types.ts  # Task, TaskStatus, Export types
│   ├── Modal.types.ts        # Modal state types
│   └── FilterOption.types.ts # Filter option type
├── App.tsx               # Main app component
├── index.css             # Global styles
└── main.tsx              # React entry point
```

## 🗂️ Key Files

| File                                    | Purpose                                                                 |
| --------------------------------------- | ----------------------------------------------------------------------- |
| `src/data/tasks.ts`                     | **Hardcoded tasks** — 3 sample todos (Active/Completed, sorted by date) |
| `src/components/table/Table.tsx`        | Renders task table from `HARDCODED_TASKS`                               |
| `src/components/modals/ExportModal.tsx` | Export handler (JSON/CSV/TXT) using hardcoded tasks                     |
| `src/types/TaskManager.types.ts`        | Type definitions (Task, TaskStatus, export formats)                     |
| `src/components/ui/Badge.tsx`           | Status display component                                                |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose (optional)

### Installation

**Local (npm):**

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:8080`

**Docker:**

```bash
docker compose up
```

The app will be available at `http://localhost:8080`

### Building

```bash
cd frontend
npm run build
npm run preview
```

## 📝 Task Structure

All tasks are stored in `src/data/tasks.ts`:

```typescript
export const HARDCODED_TASKS: Task[] = [
  { taskId: "1", date: "2026-05-01", title: "Prepare demo", status: "Active" },
  { taskId: "3", date: "2026-05-03", title: "Write docs", status: "Active" },
  { taskId: "2", date: "2026-05-02", title: "Review PRs", status: "Completed" },
];
```

**Sorting**: Active tasks first (by date), then Completed tasks.

## 🎯 About This Branch

This branch contains **no business logic**. Use it as a starting point to implement your own:

- **Object-Oriented Programming (OOP)**: Create classes for TaskManager, TaskStore, etc.
- **Functional Programming (FP)**: Implement pure functions, reducers, custom hooks
- **State Management**: Integrate Redux, Zustand, Jotai, or MobX
- **Backend Integration**: Add API calls to a real server
- **Local Storage**: Persist tasks to browser storage

All UI components, styling, and modals are pre-built. **Just implement the business logic!**

## 🛠️ Available Actions (UI-only)

- ➕ **Add Task** — Modal opens (no persistence)
- ✏️ **Edit Task** — Modal shows task details (no persistence)
- 🗑️ **Delete Task** — Modal confirms deletion (no-op)
- ✅ **Toggle Status** — Button exists (no-op)
- 📤 **Clear All** — Modal confirms (no-op)
- 💾 **Export** — Downloads JSON/CSV/TXT with hardcoded tasks

## 📦 Technologies

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool & dev server
- **CSS** — Styling (no frameworks)
