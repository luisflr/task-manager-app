import { Text, View } from "react-native";
import { headerStyles as styles } from "./styles";

interface HeaderProps {
  totalTasks: number;
  completedTasks: number;
}

export const Header = ({ totalTasks, completedTasks }: HeaderProps) => {
  const percentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hola, Dev 👋</Text>
      <Text style={styles.subtitle}>Aquí está el resumen de tus tareas</Text>

      {/* Card de Progreso */}
      <View style={styles.progressCard}>
        <View style={styles.progressTextRow}>
          <Text style={styles.progressTitle}>Progreso Total</Text>
          <Text style={styles.progressPercent}>{percentage}%</Text>
        </View>

        {/* Barra de progreso */}
        <View style={styles.progressBarTrack}>
          <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
        </View>

        <Text style={styles.progressDetail}>
          {completedTasks} de {totalTasks} tareas completadas
        </Text>
      </View>
    </View>
  );
};
