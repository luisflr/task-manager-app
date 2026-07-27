// src/data/mockTasks.ts
import { Task } from "../types/task";

export const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Rediseñar pantalla de login",
    description: "Aplicar la nueva paleta de colores y bordes redondeados.",
    isCompleted: false,
    priority: "high",
    category: "Diseño",
    dueDate: new Date(new Date().setHours(18, 0, 0, 0)),
    assigned: "Luis Flores",
  },
  {
    id: "2",
    title: "Configurar estado global",
    description: "Instalar y estructurar las store de la app.",
    isCompleted: true,
    priority: "medium",
    category: "Dev",
    dueDate: new Date(Date.now() - 86400000),
    assigned: "Jhon Doe",
  },
  {
    id: "3",
    title: "Probar componentes en Expo Go",
    isCompleted: false,
    priority: "low",
    category: "QA",
    dueDate: new Date(Date.now() + 86400000),
    assigned: "Karol Soto",
  },
  {
    id: "4",
    title: "Configurar la arquitectura de la aplicación",
    description:
      "Adaptar los archivos de configuración tsconfig, instalar los paquetes necesarios y crear las rutas del proyecto",
    isCompleted: false,
    priority: "medium",
    category: "Dev",
    dueDate: new Date(Date.now() + 86400000),
    assigned: "Luis Flores",
  },
];
