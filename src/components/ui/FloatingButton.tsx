// src/components/ui/FloatingButton.tsx
import { Pressable, Text } from "react-native";
import { floatingButtonStyles as styles } from "./styles";

interface FloatingButtonProps {
  onPress: () => void;
}

export const FloatingButton = ({ onPress }: FloatingButtonProps) => {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <Text style={styles.fabIcon}>+</Text>
    </Pressable>
  );
};
