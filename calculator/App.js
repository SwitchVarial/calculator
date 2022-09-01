import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(0.0);

  const minusPressed = () => {
    setResult(parseFloat(number1.replace(/,/g, '.')) - parseFloat(number2.replace(/,/g, '.')));
  };
  const plusPressed = () => {
    setResult(parseFloat(number1.replace(/,/g, '.')) + parseFloat(number2.replace(/,/g, '.')));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result} </Text>
      <TextInput style={styles.input} onChangeText={number1 => setNumber1(number1)} value={number1} keyboardType="decimal-pad"/>
      <TextInput style={styles.input} onChangeText={number2 => setNumber2(number2)} value={number2} keyboardType="decimal-pad"/>
      <View style={styles.row}>
        <View style={styles.button}>
          <Button onPress={minusPressed} color="white" title="-"/>
        </View>
        <View style={styles.button}>
          <Button onPress={plusPressed} color="white" title="+"/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 250
  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    margin: 5,
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    padding: 5,
    margin: 10,
    width: 50,
    backgroundColor: 'blue',
  }
});
