import { Pressable, Text, View } from "react-native";

import { colors } from "@/theme/colors";
import { Task } from "@/types/task";
import { formatDate } from "@/utils";

import { taskCardStyles as styles } from "./styles";

interface TaskCardProps {
  task: Task;
  onToggleComplete?: (id: string) => void;
  onPress: () => void;
}

export const TaskCard = ({
  task,
  onToggleComplete,
  onPress,
}: TaskCardProps) => {
  // Configuración de colores según la prioridad
  const priorityColor = {
    high: colors.primary,
    medium: colors.mediumBlue,
    low: colors.softBlue,
  }[task.priority];

  return (
    <Pressable
      style={[styles.card, task.isCompleted && styles.completedCard]}
      onPress={onPress}
    >
      {/* Checkbox táctil */}
      <Pressable
        style={[styles.checkbox, task.isCompleted && styles.checkedBox]}
        onPress={() => onToggleComplete?.(task.id)}
      >
        {task.isCompleted && <Text style={styles.checkmark}>✓</Text>}
      </Pressable>

      {/* Contenido principal */}
      <View style={styles.content}>
        <View style={styles.headerRow}>
          {/* Badge de Categoría */}
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{task.category}</Text>
          </View>

          {/* Fecha formateada */}
          <Text style={styles.dateText}>
            Vence en {formatDate(task.dueDate)}
          </Text>
        </View>

        {/* Título de la tarea */}
        <Text style={[styles.title, task.isCompleted && styles.completedText]}>
          {task.title}
        </Text>

        {/* Descripción (si existe) */}
        {task.description ? (
          <Text style={styles.description} numberOfLines={3}>
            {task.description}
          </Text>
        ) : null}

        {/* Comentarios (si existen) */}
        {task.comments ? (
          <Text style={styles.description} numberOfLines={2}>
            {task.comments}
          </Text>
        ) : null}
      </View>

      {/* Indicador visual de prioridad (Borde lateral) */}
      <View
        style={[styles.priorityIndicator, { backgroundColor: priorityColor }]}
      />
    </Pressable>
  );
};
