import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface Props {
  taskName: string;
  isCompleted: boolean;
  onRemove: () => void;
  onComplete: () => void;
}

export function Task({ taskName, isCompleted, onRemove, onComplete }: Props) {
  function handleCheck() {
    onComplete();
  }

  function handleRemove() {
    onRemove();
  }

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: "#f7f7f7" }]}
      onPress={handleCheck}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.taskName,
            { textDecorationLine: isCompleted ? "line-through" : "none" },
          ]}
        >
          {taskName}
        </Text>
        <TouchableOpacity style={styles.completeButton} onPress={handleCheck}>
          <Text style={styles.completeButtonText}>Concluir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
