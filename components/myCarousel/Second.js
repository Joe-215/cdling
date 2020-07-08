import React from "react";
import { View, Text, Image } from "react-native";

export default Second = () => {
  return (
    <View style={styles.container}>
      <Text>I am the Second</Text>
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
