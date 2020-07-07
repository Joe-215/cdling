import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default Head = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="person"
        size={40}
        color="rgb(255, 255, 255)"
        style={styles.icon}
      />
      <Image source={require("../assets/leaf.png")} style={styles.image} />
      <View style={styles.exlamation}>
        <Text style={{ fontSize: 50, textAlign: "center" }}>! </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "rgb(51, 51, 51)",
    // padding: "2%",
    textAlignVertical: "center",
  },
  icon: {
    textAlignVertical: "center",
    padding: 0,
    height: "60%",
    marginLeft: "4%",
    marginTop: "4%",
  },
  image: {
    // marginLeft: "30%",
    marginTop: "3%",
  },
  exlamation: {
    backgroundColor: "rgb(199, 213, 170)",
    marginRight: "6%",
    width: 35,
    height: "90%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
