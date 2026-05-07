# 📋 Aplikacja ToDoList

Minimalistyczna aplikacja Todo zbudowana na **React + TypeScript + Vite** z **logiką biznesową implementowaną w paradygmacie Object-Oriented Programming (OOP)**.

## ✨ Funkcjonalności

- ✅ Zarządzanie zadaniami (dodawanie, edycja, usuwanie)
- ✅ Przełączanie statusu zadań (Aktywne/Ukończone)
- ✅ Automatyczne sortowanie (aktywne po dacie, potem ukończone)
- ✅ Eksport do JSON, CSV, TXT
- ✅ Reactive state management z pattern Pub/Sub
- ✅ Responsywny layout z nawigacją
- ✅ TypeScript z pełnym type-checking
- ✅ Architektura OOP z enkapsulacją i metodami klasy

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
├── services/             # 🔧 Logika biznesowa (OOP)
│   └── TaskManager.ts    # Klasa do zarządzania zadaniami
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

## 🏗️ Architektura - Object-Oriented Programming

Logika biznesowa zbudowana na klasie `TaskManager` z enkapsulacją i metodami:

### **TaskManager** (`services/TaskManager.ts`) — Klasa Główna

```typescript
export class TaskManager {
  private tasks: Task[] = [];
  private subs = new Set<(tasks: Task[]) => void>();

  constructor(initial: Task[] = []) { ... }

  // Metody publiczne
  subscribe(callback: (tasks: Task[]) => void): () => void { ... }
  getTasks(): Task[] { ... }
  addTask(payload: NewTaskPayload): Task { ... }
  deleteTask(taskId: string): void { ... }
  updateTask(taskId: string, patch: Partial<Task>): void { ... }
  toggleTaskStatus(taskId: string): void { ... }
  clearTasks(): void { ... }
  exportTasks(format: TaskManagerExportFormat): TaskManagerExportResult { ... }

  // Metoda prywatna
  private notify(): void { ... }
}
```

**Cechy OOP:**

- **Enkapsulacja**: `private tasks` i `private subs` — dostęp tylko przez metody publiczne
- **Metody**: `getTasks()`, `addTask()`, `deleteTask()`, itd.
- **Konstruktor**: inicjalizacja stanu obiektu
- **Reactive Pattern**: `subscribe()` do powiadamiania subskrybentów
- **State Management**: zarządzanie listą zadań wewnątrz instancji

### **TaskManagerProvider** (`context/TaskManagerContext.tsx`)

- Tworzy instancję klasy `TaskManager` za pomocą `new TaskManager(initial)`
- Singleton pattern z `useMemo` — jedna instancja na całą aplikację
- Udostępnia instancję przez React Context
- Unika Prop Drillingu

### **useTaskManager Hook** (`hooks/useTaskManager.ts`)

- Integruje instancję `TaskManager` z React state
- Subskrybuje zmiany stanu poprzez `manager.subscribe()`
- Udostępnia typ-safe API dla komponentów
- Automatycznie re-renderuje komponenty przy zmianach

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

Automatyczne sortowanie wewnątrz klasy `TaskManager`:

1. Zadania **Aktywne** (posortowane po dacie rosnąco)
2. Zadania **Ukończone** (posortowane po dacie rosnąco)

```typescript
// Sortowanie wykonywane automatycznie w getTasks()
if (a.status === b.status) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}
return a.status === "Active" ? -1 : 1;
```

## 💾 Eksport Danych

Obsługiwane formaty:

- **JSON** — strukturyzowane dane
- **CSV** — import do Excel/Sheets
- **TXT** — prosty format tekstowy

Nazwy plików: `tasks-YYYY-MM-DD.{json|csv|txt}`

## 🔄 Pattern Pub/Sub

Klasa `TaskManager` implementuje reactive pattern do powiadamiania komponentów o zmianach:

```typescript
// Subskrybowanie do zmian
const unsub = manager.subscribe((tasks) => {
  setTasks(tasks); // React state się aktualizuje
});

// Automatycznie wywoływane przy każdej operacji:
manager.addTask({ title: "...", date: "..." });
manager.deleteTask(id);
manager.toggleTaskStatus(id);

// Odsubskrybowanie
unsub();
```

Każda zmiana danych automatycznie powiadamia wszystkich subskrybentów poprzez metodę `notify()`.

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
- **Object-Oriented Programming** (klasy, enkapsulacja, metody)
- **Pub/Sub Pattern** (reactive updates)
- **React Context** (state management)
- **Custom Hooks** (integracja ze stanem React)

## 🎯 Wzorce Projektowe Wykorzystane

1. **Singleton Pattern** — jedna instancja `TaskManager` dla całej aplikacji
2. **Observer Pattern** — `subscribe()` do reactive updates
3. **Dependency Injection** — inicjalne dane w konstruktorze
4. **Encapsulation** — prywatne właściwości i metody
5. **Strategy Pattern** — różne formaty eksportu (json/csv/txt)
