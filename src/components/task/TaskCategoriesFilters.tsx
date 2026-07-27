import { FilterCategory, TASK_CATEGORIES } from "@/types/task";
import { Pressable, ScrollView, Text, View } from "react-native";

import { filtersStyles as styles } from "./styles";

interface CategoryFilterProps {
  selectedCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
}

// Lista completa con la opción 'Todas' al inicio
const ALL_FILTERS: FilterCategory[] = ["Todas", ...TASK_CATEGORIES];

export const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {ALL_FILTERS.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <Pressable
              key={category}
              style={[styles.chip, isActive && styles.activeChip]}
              onPress={() => onSelectCategory(category)}
            >
              <Text
                style={[styles.chipText, isActive && styles.activeChipText]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};
