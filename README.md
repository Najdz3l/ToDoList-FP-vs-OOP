# Struktura projektu React + TypeScript

```text
my-react-app/
├── public/              # Statyczne publiczne (np. favicon, robots.txt)
├── src/                 # Główny katalog z kodem źródłowym
│   ├── assets/          # Bezpośrednio importowane statyczne zasoby (obrazki, fonty)
│   ├── components/      # Współdzielone, uniwersalne komponenty UI
│   ├── features/        # Moduły pogrupowane według funkcjonalności aplikacji
│   ├── hooks/           # Globalne, niestandardowe hooki (custom hooks)
│   ├── layouts/         # Komponenty definiujące układ strony (np. z Header i Footer)
│   ├── pages/           # Komponenty reprezentujące całe widoki i podstrony (Routing)
│   ├── services/        # Logika połączeń i komunikacji z zewnętrznym API
│   ├── store/           # Globalny stan aplikacji (Zustand, Redux, Context API)
│   ├── styles/          # Globalne style, motywy, zmienne CSS
│   ├── types/           # Globalne definicje typów i interfejsów TypeScript
│   └── utils/           # Reużywalne funkcje pomocnicze, formatery danych
├── package.json
└── tsconfig.json
```
