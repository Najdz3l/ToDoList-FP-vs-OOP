export const generateUniqueId = (): string =>
  typeof globalThis !== "undefined" &&
  (globalThis as any).crypto &&
  typeof (globalThis as any).crypto.randomUUID === "function"
    ? (globalThis as any).crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
