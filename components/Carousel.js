import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default Carousel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleContent}>OPEN COFFEE PARTIES</Text>
      </View>
      <View>
        <Text>I am a Carousel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    height: 40,
    backgroundColor: "rgb(198, 212, 169)",
    borderBottomRightRadius: 15,
    width: Dimensions.get("window").width,
  },
  titleContent: {
    fontSize: 18,
    // textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: 9,
    paddingLeft: 20,
  },
});
