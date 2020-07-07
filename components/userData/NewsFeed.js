import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default NewsFeed = () => {
  return (
    <View style={styles.container}>
      <Text>I am a News Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
