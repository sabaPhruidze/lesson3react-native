import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("shown");
  const [age, setAge] = useState(30);
  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John mcartny"
        onChangeText={(value) => setName(value)}
        multiline
      />
      <Text>Name : {name}</Text>
      <Text>Enter Age: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 30"
        onChangeText={(value) => setAge(value)}
      />
      <Text>age : {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
