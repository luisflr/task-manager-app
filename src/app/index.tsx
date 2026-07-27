// app/index.tsx
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

// Componentes
import { Header } from "@/components/layout/Header";
import { TaskCard } from "@/components/task/TaskCard";
import { CategoryFilter } from "@/components/task/TaskCategoriesFilters";
import { FloatingButton } from "@/components/ui/FloatingButton";

// Tipos y Datos Mock
import { MOCK_TASKS } from "@/data/mockTasks";
import { colors } from "@/theme/colors";
import { FilterCategory, Task } from "@/types/task";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  // Estado local para manipular las tareas antes de integrar Zustand
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("Todas");

  // Alternar el estado completado de una tarea
  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  // Filtrado reactivo según la categoría seleccionada
  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "Todas") return true;
    return task.category === selectedCategory;
  });

  // Cálculo de estadísticas para el Header
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.isCompleted).length;

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.darkBlue} />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        // Componentes del encabezado de la lista
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
        // Renderizado de cada item
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggleComplete={handleToggleComplete}
            onPress={() =>
              router.push({
                pathname: "/task/[id]",
                params: { id: item.id },
              })
            }
          />
        )}
        // Estado vacío si el filtro no devuelve resultados
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No hay tareas en esta categoría 🎯
            </Text>
          </View>
        }
      />

      {/* Botón Flotante para Crear Tarea */}
      <FloatingButton
        onPress={() => {
          // Aquí abriremos el modal de creación de tareas
          console.log("Abrir modal de creación");
        }}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingBottom: 100, // Espacio para que el FAB no tape la última tarjeta
  },
  filterSection: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.darkBlue,
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  sectionTitleList: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.darkBlue,
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 8,
  },
  emptyContainer: {
    padding: 32,
    alignItems: "center",
  },
  emptyText: {
    color: colors.softBlue,
    fontSize: 14,
  },
});
