import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import Header from "./components/header";

const ListItem = (props) => {
  // define style for list Item
  const listItemStyles = StyleSheet.create({
    name: {
      color: "white",
    },
    age: {
      color: "gray",
    },
    container: {
      backgroundColor: "black",
    },
  });

  return (
    <View style={listItemStyles.container}>
      <Text style={listItemStyles.name}>{props.name}</Text>
      <Text style={listItemStyles.age}>Age: {props.age}</Text>
    </View>
  );
};

export default function App() {
  const [name, setName] = useState("shaun");
  const [age, setAge] = useState("30");

  // create an array
  var array = [
    { Name: "Javier Garcia Vila", age: "28", key: "1" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "2" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "3" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "4" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "5" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "6" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "7" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "8" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "9" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "10" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "11" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "12" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "13" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "14" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "15" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "16" },
    { Name: "Rigoberto Garcia Martinez", age: "61", key: "17" },
  ];

  // change the age property in the array using random numbers
  array.forEach(
    (item) => (item.age = Math.trunc(Math.random() * 60).toString())
  );

  // this is just some dummy data for my testing application
  const [people, setPeople] = useState(array);

  return (
    <View>
      <Header></Header>
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
  input: {
    color: "white",
  },
  clockText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 250,
  },
  text: {
    color: "white",
  },
});
