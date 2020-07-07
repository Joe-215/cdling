import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Head from "./components/Head";
import UserData from "./components/userData/UserData";
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <View style={styles.container}>
      <Head />
      <UserData />
      <Carousel />
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
});

/* TODO

1. Head
- User Icon //
- Leaf Icon //
- Exclamation Mark //

2. UserINfo
- Top Navigation
- UserData with Linkedin Badge
- User Content

3. Carousel
- Carousel Implementation
- Stuck AI Picture

*/
