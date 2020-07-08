import React from "react";
import { View, Text, Image } from "react-native";

export default Third = () => {
  return (
    <View style={styles.container}>
      <Text>I am the Third</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
