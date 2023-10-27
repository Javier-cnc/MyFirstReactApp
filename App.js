import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  // add some variables that change over time
  const [counter, setCounter] = useState(0);

  clickHandler = () => {
    // define number tu show
    let numberToShow = counter + 1;
    if (numberToShow > 10) {
      numberToShow = 0;
    }
    setCounter(numberToShow);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>This is the counter: {counter}</Text>
      </View>
      <View style={styles.body}>
        <Text>First text testing</Text>
        <Text>Second text testing</Text>
        <Text>Third text testing</Text>
        <Text>Fourth text testing</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Update value" onPress={clickHandler}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
