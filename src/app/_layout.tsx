import { colors } from "@/theme/colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
