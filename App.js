import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Head from "./components/Head";
import UserData from "./components/userData/UserData";
import MyCarousel from "./components/myCarousel/MyCarousel";

class App extends React.Component {
  state = {
    images: [
      {
        source: require("./stuckAI.png"),
        title: "STUCK AI",
        description:
          "Ad platform for digital out-of-home (DOOH)location-based advertising.",
      },
      {
        source: require("./avatar2.png"),
        title: "second",
        description: "second image",
      },
      {
        source: require("./avatar3.jpg"),
        title: "third",
        description: "third image",
      },
    ],
    currentScene: 0,
  };

  // handleChangeScene = (scene) => this.setState({ currentScene: scene });
  // handleChangeScene = function (scene) {
  //   this.setState({ currentScene: scene });
  // };

  render() {
    // const { currentScene } = this.state;
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

2. UserINfo
- Top Navigation
- UserData with Linkedin Badge
- User Content

3. Carousel
- Carousel Implementation
- Stuck AI Picture

*/
