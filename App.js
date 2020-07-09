import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Head from "./components/Head";
import UserData from "./components/userData/UserData";
import MyCarousel from "./components/myCarousel/MyCarousel";

class App extends React.Component {
  state = {
    images: [
      {
        source: require("./assets/stuckAI.png"),
        title: "STUCK AI",
        description:
          "Ad platform for digital out-of-home (DOOH)location-based advertising.",
      },
      {
        source: require("./assets/avatar2.png"),
        title: "Second",
        description: "This is the second coffee party",
      },
      {
        source: require("./assets/avatar3.jpg"),
        title: "Third",
        description: "This is the third coffee party",
      },
      {
        source: require("./assets/avatar4.jpg"),
        title: "Fourth",
        description: "This is the fourth coffee party",
      },
      {
        source: require("./assets/avatar5.jpeg"),
        title: "Fifth",
        description: "This is the fifth coffee party",
      },
    ],
    currentScene: 0,
  };

  render() {
    const handleChangeScene = (scene) => this.setState({ currentScene: scene });

    return (
      <View style={styles.container}>
        <Head />
        <UserData />
        <MyCarousel
          items={this.state.images}
          currentScene={this.state.currentScene}
          onChangeScene={handleChangeScene}
        />
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

export default App;

/* TODO

1. Head
- exclamation mark
- cross mark

2. UserINfo

- Linkedin Badge
- Font

3. Carousel
- title bar border radius

*/
