import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default UserPhoto = () => {
  return (
    <View style={styles.container}>
      <Text>I am a UserPhoto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "green",
  },
});
