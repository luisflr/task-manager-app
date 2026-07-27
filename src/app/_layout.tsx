import { colors } from "@/theme/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.darkBlue },
        headerTintColor: colors.whiteBackground,
        headerTitleStyle: { fontWeight: "bold" },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      {/* Ocultamos el header nativo en la Home porque usaremos nuestro Header custom */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Detalle de tarea */}
      <Stack.Screen name="task/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
