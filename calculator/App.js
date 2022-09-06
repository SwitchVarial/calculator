import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Keyboard,
  Alert,
} from "react-native";

export default function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [data, setData] = useState([]);
  const [result, setResult] = useState(0.0);

  const calculate = (operator) => {
    if (number1 === "" || number2 === "") {
      Alert.alert("Please insert both numbers");
      return;
    }
    let newResult = "";

    switch (operator) {
      case "-":
        newResult =
          parseFloat(number1.replace(/,/g, ".")) -
          parseFloat(number2.replace(/,/g, "."));
        setResult(newResult);
        break;
      case "+":
        newResult =
          parseFloat(number1.replace(/,/g, ".")) +
          parseFloat(number2.replace(/,/g, "."));
        setResult(newResult);
        break;
    }

    const history =
      number1 + " " + operator + " " + number2 + " = " + newResult;

    const newData = [...data, { key: history }];
    setData(newData);
    setNumber1("");
    setNumber2("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Result: {result} </Text>
      <TextInput
        style={styles.input}
        onChangeText={(number1) => setNumber1(number1)}
        value={number1}
        keyboardType="decimal-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={(number2) => setNumber2(number2)}
        value={number2}
        keyboardType="decimal-pad"
      />
      <View style={styles.row}>
        <View style={styles.button}>
          <Button onPress={() => calculate("-")} color="white" title="-" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => calculate("+")} color="white" title="+" />
        </View>
      </View>
      <Text style={styles.title}>History</Text>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginTop: 5,
  },
  text: {
    marginTop: 5,
  },
  container: {
    flex: 1,
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 250,
  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    margin: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    padding: 5,
    margin: 10,
    width: 50,
    backgroundColor: "blue",
  },
});
