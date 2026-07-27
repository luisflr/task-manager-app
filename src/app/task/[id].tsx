import { colors } from "@/theme/colors";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      {/* Muestra el header de la navegación nativa */}
      <Stack.Screen options={{ title: `Tarea #${id}`, headerShown: true }} />

      <Text style={styles.text}>Detalle de la tarea ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 18,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
});
