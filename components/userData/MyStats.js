import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default MyStats = () => {
  return (
    <View style={styles.container}>
      <Text>I am a MyStats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});
