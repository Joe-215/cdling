import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Head from "./components/Head";
import UserData from "./components/userData/UserData";
import MyCarousel from "./components/myCarousel/MyCarousel";
import { registerRootComponent } from "expo";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Head />
        <UserData />
        <MyCarousel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);

/* TODO

1. Head

2. UserINfo
- Top Navigation
- UserData with Linkedin Badge
- User Content

3. Carousel
- Carousel Implementation
- Stuck AI Picture

*/
