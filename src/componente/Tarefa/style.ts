import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  completeButton: {
    backgroundColor: "#7fbf7f",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  completeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#bf7f7f",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
