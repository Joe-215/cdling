import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "react-native-elements";

export default MyPortfolio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>NEED TO KNOW</Text>
        <Text style={styles.titleCross}>x</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.photoContainer}>
          <Avatar
            size="large"
            rounded
            source={require("../../assets/avatar2.png")}
          />
          <Image style={styles.badge} source={require("../../linkedin.jpg")} />
          {/* <Image
            style={styles.badge}
            source={require("../../crunchbase.png")}
          /> */}
          <Text style={styles.status}>OPEN</Text>
        </View>
        <View style={styles.contentDescription}>
          <Text style={styles.name}>Swish.</Text>
          <Text style={styles.time}>30m ago</Text>
          <Text></Text>
          <Text style={styles.description}>
            Attn: #Experts! 1hr left in out #coffeeparty Get in your answers
            time's running out - thanks for participating #cdling #swish
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "green",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
  },
  titleText: {
    padding: 10,
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  titleCross: {
    padding: 10,
    paddingLeft: 210,
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 20,
  },
  contentContainer: {
    flex: 5,
    flexDirection: "row",
  },
  photoContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  status: {
    textAlign: "center",
    paddingTop: 10,
    paddingLeft: 5,
  },
  contentDescription: {
    paddingTop: 20,
    paddingRight: 20,
    flex: 4,
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  time: {
    fontSize: 14,
  },
  description: {
    fontSize: 14,
  },
  badge: {
    height: 25,
    width: 25,
    position: "absolute",
    marginLeft: 80,
    marginTop: 80,
  },
});
