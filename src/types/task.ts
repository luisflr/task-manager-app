export type Priority = "low" | "medium" | "high";

// 1. Un arreglo real en tiempo de ejecución (que SÍ puedes iterar)
export const TASK_CATEGORIES = [
  "Diseño",
  "Dev",
  "QA",
  "Gestión",
  "General",
] as const;

// 2. Extraemos el 'type' automáticamente del arreglo usando 'typeof'
export type TaskCategory = (typeof TASK_CATEGORIES)[number];
// Esto crea equivalencia exacta a: 'Diseño' | 'Dev' | 'QA' | 'Gestión' | 'General'

export type FilterCategory = "Todas" | TaskCategory;

export interface Task {
  id: string;
  title: string;
  description?: string;
  comments?: string;
  isCompleted: boolean;
  priority: Priority;
  category: TaskCategory;
  dueDate: Date;
  assigned: string;
}
