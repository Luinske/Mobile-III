import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { generate } from "shortid"; // Biblioteca para gerar ID
import { styles } from "./style";
interface Props {
  addTask: (task: { id: string; title: string }) => void;
}

export function FormularioTarefa({ addTask }: Props) {
  const [task, setTask] = useState("");

  function handleSubmit() {
    if (task.trim() !== "") {
      const id = generate(); // Gera um novo ID usando a biblioteca shortid
      addTask({ id, title: task.trim() });
      setTask("");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
