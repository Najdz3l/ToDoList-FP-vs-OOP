# 📋 Aplikacja ToDoList

Minimalistyczna aplikacja Todo zbudowana na **React + TypeScript + Vite**. Ten branch pełni rolę **szablonu** z gotowym UI i stylizacją, ale **bez żadnej logiki biznesowej** — gotowa do implementacji własnej architektury (OOP, FP, lub inny paradygmat).

## ✨ Funkcjonalności

- ✅ Wyświetlanie hardcoded'owanych zadań (3 przykładowe)
- ✅ Tabela zadań ze statusami
- ✅ Eksport do JSON, CSV, TXT
- ✅ Okna modalne do add/edit/delete/clear
- ✅ Przyciski akcji (bez logiki)
- ✅ Responsywny layout z nawigacją
- ✅ TypeScript z full type-checking

## 📁 Struktura Projektu

```
frontend/src/
├── assets/
│   └── icons/
│       ├── tasks/                # Ikony kategorii zadań
│       └── ui/                   # Ikony UI
├── components/                   # Komponenty React (bez logiki)
│   ├── actions/                  # Akcje dla zadań
│   │   ├── DeleteTask.tsx
│   │   ├── EditTask.tsx
│   │   └── ToggleTaskStatus.tsx
│   ├── layout/                   # Komponenty layoutu
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   ├── modals/                   # Okna modalne
│   │   ├── Modal.tsx
│   │   ├── AddTaskModal.tsx
│   │   ├── EditTaskModal.tsx
│   │   ├── DeleteTaskModal.tsx
│   │   ├── ClearTasksModal.tsx
│   │   └── ExportModal.tsx
│   ├── navbar/                   # Komponenty navbaru
│   │   ├── AddTask.tsx
│   │   ├── ClearTasks.tsx
│   │   ├── Export.tsx
│   │   ├── Filters.tsx
│   │   ├── FiltersSearch.tsx
│   │   └── FiltersSelect.tsx
│   ├── table/                    # Tabela z zadaniami
│   │   ├── Table.tsx             # Wyświetla hardcoded'owane zadania
│   │   └── Row.tsx               # Wiersz zadania z akcjami
│   └── ui/                       # Komponenty UI (Badge, Button, Input, etc.)
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Icon.tsx
│       └── Select.tsx
├── context/                      # React Context
│   └── ModalContext.tsx          # State modali
├── data/                         # 📌 Dane stałe
│   └── tasks.ts                  # Hardcoded zadania (3 szt)
├── types/                        # TypeScript typy
│   ├── TaskManager.types.ts      # Typy Task, TaskStatus
│   ├── Modal.types.ts            # Typy modali
│   └── FilterOption.types.ts     # Typ FilterOption
├── App.tsx
├── index.css
└── main.tsx
```

## 🎯 O tym Branchu

To **szablon** z gotowym UI i stylizacją, ale **bez żadnej logiki biznesowej**. Gotowy do implementacji własnej architektury:

- **OOP** — Klasy TaskManager, TaskStore
- **FP** — Pure functions, custom hooks
- **State Management** — Redux, Zustand, Context API
- **Backend** — API calls
- **Persistence** — LocalStorage, IndexedDB

Wszystkie komponenty UI i style są gotowe. **Tylko zaimplementuj logikę!**

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

## 📝 Struktura Zadań

Wszystkie zadania w `src/data/tasks.ts`:

```typescript
export const HARDCODED_TASKS: Task[] = [
  { taskId: "1", date: "2026-05-01", title: "Prepare demo", status: "Active" },
  { taskId: "3", date: "2026-05-03", title: "Write docs", status: "Active" },
  { taskId: "2", date: "2026-05-02", title: "Review PRs", status: "Completed" },
];
```

**Sortowanie**: Aktywne zadania (po dacie), potem Ukończone.

## 🛠️ Dostępne Akcje (tylko UI)

- ➕ **Dodaj Zadanie** — Modal (bez persist)
- ✏️ **Edytuj** — Wyświetla dane (bez persist)
- 🗑️ **Usuń** — Modal potwierdzenia (no-op)
- ✅ **Toggle Status** — Przycisk (no-op)
- 📤 **Wyczyść Wszystko** — Modal (no-op)
- 💾 **Eksportuj** — JSON/CSV/TXT

## 📦 Technologie

- **React 18** — biblioteka UI
- **TypeScript** — type safety
- **Vite** — bundler i dev server
- **CSS** — stylizacja (bez frameworków)
- **Docker** — konteneryzacja
