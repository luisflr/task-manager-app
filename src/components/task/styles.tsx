import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

// Task Card Styles

export const taskCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    // Sombras para iOS y Android
    elevation: 2,
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    position: "relative",
    overflow: "hidden",
  },
  completedCard: {
    opacity: 0.6,
    backgroundColor: "#F1F5F9",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.mediumBlue,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginTop: 2,
  },
  checkedBox: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  categoryBadge: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.primary,
  },
  dateText: {
    fontSize: 11,
    color: colors.softBlue,
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.darkBlue,
    marginBottom: 4,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: colors.softBlue,
  },
  description: {
    fontSize: 13,
    color: colors.mediumBlue,
    lineHeight: 18,
  },
  comments: {
    fontSize: 11,
    color: colors.lightText,
    lineHeight: 18,
  },
  priorityIndicator: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },
});

// Fitlers Styles

export const filtersStyles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 8, // Espaciado entre chips
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.lightBlue,
  },
  activeChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.mediumBlue,
  },
  activeChipText: {
    color: "#FFFFFF",
  },
});
