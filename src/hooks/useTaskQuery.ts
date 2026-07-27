// src/hooks/useTasksQuery.ts
import { taskService } from "@/services/taskService";
import { Task } from "@/types/task";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Key única para identificar la caché de las tareas
export const TASKS_QUERY_KEY = ["tasks"];

export const useTasksQuery = () => {
  const queryClient = useQueryClient();

  // 1. Obtener Tareas (Query)
  const tasksQuery = useQuery({
    queryKey: TASKS_QUERY_KEY,
    queryFn: taskService.getTasks,
    staleTime: 1000 * 60 * 5, // Considerar datos frescos durante 5 minutos
  });

  // 2. Mutación con Actualización Optimista (Optimistic Update)
  const toggleMutation = useMutation({
    mutationFn: ({ id, isCompleted }: { id: string; isCompleted: boolean }) =>
      taskService.toggleTaskComplete(id, isCompleted),

    // Al hacer clic, actualizamos la UI instantáneamente antes de que responda el servidor
    onMutate: async ({ id, isCompleted }) => {
      await queryClient.cancelQueries({ queryKey: TASKS_QUERY_KEY });
      const previousTasks = queryClient.getQueryData<Task[]>(TASKS_QUERY_KEY);

      queryClient.setQueryData<Task[]>(TASKS_QUERY_KEY, (old: Task[]) =>
        old?.map((task) => (task.id === id ? { ...task, isCompleted } : task))
      );

      return { previousTasks };
    },

    // Si la API falla, revertimos el cambio
    onError: (_err, _variables, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(TASKS_QUERY_KEY, context.previousTasks);
      }
    },

    // Al finalizar, revalidamos la caché
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
    },
  });

  return {
    tasks: tasksQuery.data ?? [],
    isLoading: tasksQuery.isLoading,
    isError: tasksQuery.isError,
    refetch: tasksQuery.refetch,
    toggleTask: (id: string, isCompleted: boolean) =>
      toggleMutation.mutate({ id, isCompleted }),
  };
};
