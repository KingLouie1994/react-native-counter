import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  function changer() {
    setCounter((prevCount) => prevCount + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Counter: {counter}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={changer}>
        <Text>Press Here</Text>
      </TouchableOpacity>
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
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: "orange",
    borderColor: "orange",
    borderRadius: 5,
  },
});
