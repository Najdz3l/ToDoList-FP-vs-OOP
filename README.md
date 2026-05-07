# 📋 Aplikacja ToDoList

Minimalistyczna aplikacja Todo zbudowana na **React + TypeScript + Vite** z **logiką biznesową implementowaną w paradygmacie Functional Programming**.

## ✨ Funkcjonalności

- ✅ Zarządzanie zadaniami (dodawanie, edycja, usuwanie)
- ✅ Przełączanie statusu zadań (Aktywne/Ukończone)
- ✅ Automatyczne sortowanie (aktywne po dacie, potem ukończone)
- ✅ Eksport do JSON, CSV, TXT
- ✅ Reactive state management z pattern Pub/Sub
- ✅ Responsywny layout z nawigacją
- ✅ TypeScript z pełnym type-checking

## 📁 Struktura Projektu

```
frontend/src/
├── assets/
│   └── icons/
│       ├── tasks/        # Ikony kategorii zadań
│       └── ui/           # Ikony UI
├── components/           # Komponenty React
│   ├── actions/          # Akcje dla zadań
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
│   │   ├── Table.tsx
│   │   └── Row.tsx
│   └── ui/               # Komponenty UI
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Icon.tsx
│       └── Select.tsx
├── services/             # 🔧 Logika biznesowa (FP)
│   ├── TaskManager.ts    # Pure functions do zarządzania zadaniami
│   └── TaskListStore.ts  # Immutable store zadań
├── context/              # React Context
│   ├── TaskManagerContext.tsx   # Provider TaskManagera
│   └── ModalContext.tsx         # State modali
├── hooks/                # Custom Hooks
│   └── useTaskManager.ts # Hook do integracji TaskManagera
├── types/                # TypeScript typy
│   ├── TaskManager.types.ts
│   ├── Modal.types.ts
│   ├── EditFields.types.ts
│   └── FilterOption.types.ts
├── utils/
│   └── generateUniqueId.ts
├── App.tsx
├── index.css
└── main.tsx
```

## 🏗️ Architektura - Functional Programming

Logika biznesowa zbudowana na pure functions i immutable data:

### **TaskListStore** (`services/TaskListStore.ts`)

- Store przechowujący stan zadań
- Zapobiega bezpośrednim mutacjom
- Zwraca kopie danych (immutability)

### **TaskManager** (`services/TaskManager.ts`)

Pure functions do zarządzania zadaniami:

- `getTasks()` — pobiera posortowaną listę
- `addTask(payload)` — dodaje nowe zadanie
- `deleteTask(id)` — usuwa zadanie
- `updateTask(id, patch)` — aktualizuje pola
- `toggleTaskStatus(id)` — przełącza status
- `clearTasks()` — czyści wszystkie zadania
- `exportTasks(format)` — eksportuje w formacie (json/csv/txt)
- `subscribe(callback)` — Pub/Sub pattern (reactive updates)

### **useTaskManager Hook** (`hooks/useTaskManager.ts`)

- Integruje TaskManager z React
- Subskrybuje zmiany stanu
- Udostępnia typ-safe API dla komponentów

### **TaskManagerProvider** (`context/TaskManagerContext.tsx`)

- React Context Provider
- Singleton pattern z `useMemo`
- Unika Prop Drillingu

## 🚀 Szybki Start

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

## 📊 Sortowanie Zadań

Automatyczne sortowanie:

1. Zadania **Aktywne** (sorted by date ascending)
2. Zadania **Ukończone** (sorted by date ascending)

```typescript
const sortByStatusAndDate = (tasks: Task[]): Task[] => {
  return tasks.sort((a, b) => {
    if (a.status === b.status) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return a.status === "Active" ? -1 : 1;
  });
};
```

## 💾 Eksport Danych

Obsługiwane formaty:

- **JSON** — strukturyzowane dane
- **CSV** — import do Excel/Sheets
- **TXT** — prosty format tekstowy

Nazwy plików: `tasks-YYYY-MM-DD.{json|csv|txt}`

## 🔄 Pattern Pub/Sub

TaskManager używa reactive pattern do powiadamiania komponentów o zmianach:

```typescript
const unsub = taskManager.subscribe((tasks) => {
  // Komponenty automatycznie się re-render'ują
});

// Unsubscribe
unsub();
```

## 🛠️ Dostępne Akcje

- ➕ **Dodaj Zadanie** — Form + persist w store
- ✏️ **Edytuj** — Modal edycji z persist
- 🗑️ **Usuń** — Modal potwierdzenia + persist
- ✅ **Toggle Status** — Zmiana Active/Completed
- 📤 **Wyczyść Wszystko** — Usuwa wszystkie zadania
- 💾 **Eksportuj** — JSON/CSV/TXT

## 📦 Technologie

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **Docker** + Docker Compose
- **Functional Programming** (pure functions, immutability)
- **Pub/Sub Pattern** (reactive updates)
