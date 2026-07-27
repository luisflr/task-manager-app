import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

// Header Styles

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 14,
    color: colors.softBlue,
    marginTop: 2,
    marginBottom: 16,
  },
  progressCard: {
    backgroundColor: colors.mediumBlue,
    borderRadius: 16,
    padding: 16,
  },
  progressTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  progressTitle: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  progressPercent: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  progressBarTrack: {
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  progressDetail: {
    color: colors.lightBlue,
    fontSize: 12,
  },
});
