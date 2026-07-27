// src/services/taskService.ts
import { Task, TaskCategory } from "../types/task";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Categorías para asignar aleatoriamente a los ítems mock
const CATEGORIES: TaskCategory[] = [
  "Diseño",
  "Dev",
  "QA",
  "Gestión",
  "General",
];

export const taskService = {
  // GET: Obtener lista de tareas
  getTasks: async (): Promise<Task[]> => {
    const response = await fetch(`${API_URL}?_limit=10`);
    if (!response.ok) throw new Error("Error al obtener las tareas");
    const rawData = await response.json();

    // Transformación/Mapeo de datos externos al dominio de la App
    return rawData.map((item: any) => ({
      id: String(item.id),
      title: item.title,
      description: `Tarea asignada al usuario #${item.userId}`,
      isCompleted: item.completed,
      priority:
        item.id % 3 === 0 ? "high" : item.id % 2 === 0 ? "medium" : "low",
      category: CATEGORIES[item.id % CATEGORIES.length],
      dueDate: new Date(Date.now() + item.id * 86400000),
      assignedTo: `Usuario ${item.userId}`,
    }));
  },

  // PATCH / PUT: Alternar estado completado
  toggleTaskComplete: async (
    id: string,
    isCompleted: boolean
  ): Promise<boolean> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: isCompleted }),
    });
    if (!response.ok) throw new Error("Error al actualizar la tarea");
    return isCompleted;
  },
};
