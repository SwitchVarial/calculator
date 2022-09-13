import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function History({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});
