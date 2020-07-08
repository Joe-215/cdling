import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import NewsFeed from "./NewsFeed";
import MyPortfolio from "./MyPortfolio";
import MyStats from "./MyStats";

const Tab = createMaterialTopTabNavigator();

export default UserData = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen name="NEWS FEED" component={NewsFeed} />
          <Tab.Screen name="MY PORTFOLIO" component={MyPortfolio} />
          <Tab.Screen name="MY STATS" component={MyStats} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "row",
  },
});
