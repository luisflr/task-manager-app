// app/index.tsx
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Componentes
import { Header } from "@/components/layout/Header";
import { TaskCard } from "@/components/task/TaskCard";
import { CategoryFilter } from "@/components/task/TaskCategoriesFilters";
import { FloatingButton } from "@/components/ui/FloatingButton";

// Hooks & Stores
import { useTasksQuery } from "@/hooks/useTaskQuery";
import { useUIStore } from "@/store/useUIStore";
import { colors } from "@/theme/colors";
import { Task } from "@/types/task";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  // 1. Estado del Servidor vía TanStack Query
  const { tasks, isLoading, isError, refetch, toggleTask } = useTasksQuery();

  // 2. Estado de la UI vía Zustand
  const { selectedCategory, setSelectedCategory } = useUIStore();

  // Filtrado de la lista en memoria
  const filteredTasks = tasks.filter((task: Task) => {
    if (selectedCategory === "Todas") return true;
    return task.category === selectedCategory;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t: Task) => t.isCompleted).length;

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Cargando tareas desde la API...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.darkBlue} />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            colors={[colors.primary]}
          />
        }
        ListHeaderComponent={
          <View>
            <Header totalTasks={totalTasks} completedTasks={completedTasks} />
            <View style={styles.filterSection}>
              <Text style={styles.sectionTitle}>Categorías</Text>
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </View>
            <Text style={styles.sectionTitleList}>
              Tareas ({filteredTasks.length})
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggleComplete={(id) => toggleTask(id, !item.isCompleted)}
            onPress={() =>
              router.push({
                pathname: "/task/[id]" as any,
                params: { id: item.id },
              })
            }
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {isError
                ? "Error al cargar datos."
                : "No hay tareas en esta categoría 🎯"}
            </Text>
          </View>
        }
      />

      <FloatingButton onPress={() => console.log("Abrir Modal Tarea")} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 12, color: colors.mediumBlue, fontSize: 14 },
  listContent: { paddingBottom: 100 },
  filterSection: { marginTop: 16 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.darkBlue,
    paddingHorizontal: 20,
  },
  sectionTitleList: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.darkBlue,
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 8,
  },
  emptyContainer: { padding: 32, alignItems: "center" },
  emptyText: { color: colors.softBlue, fontSize: 14 },
});
