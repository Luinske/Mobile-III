import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Task } from "../../componente/Tarefa";
import { styles } from "./style";
import shortid from "shortid";

const date = new Date();
const day = date.toLocaleDateString("pt-BR");

export default function Principal() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    if (!novaTarefa.trim()) {
      return console.log("Tarefa vazia ou nula");
    }

    if (tarefas.some((t) => t.name === novaTarefa.trim())) {
      return console.log(novaTarefa, "- Tarefa já existe");
    }

    const novaTarefaObj = {
      id: shortid.generate(),
      name: novaTarefa.trim(),
      completo: false,
    };

    setTarefas((prevState) => [...prevState, novaTarefaObj]);
    setNovaTarefa("");
  }

  function removerTarefa(id: string) {
    setTarefas((prevState) => prevState.filter((t) => t.id !== id));
  }

  function marcarConcluida(id: string) {
    setTarefas((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, completo: !t.completo } : t))
    );
  }

  const totalT = tarefas.length;
  const totalTConcluidas = tarefas.filter((t) => t.completo).length;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textEvento}>
        Lista de Tarefas (Clique para concluir)
      </Text>
      <Text style={styles.textData}>{day}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.textInputParticipant}
          placeholder="Adicionar tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNovaTarefa}
          value={novaTarefa}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textTarefa}>
        Total de tarefas: {totalT} Terminadas: {totalTConcluidas}
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tarefas.map((t) => (
          <Task
            key={t.id}
            taskName={t.name}
            isCompleted={t.completo}
            onRemove={() => removerTarefa(t.id)}
            onComplete={() => marcarConcluida(t.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
