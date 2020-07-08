import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { withTheme } from "react-native-elements";

export default MyCarousel = (props) => {
  const [sliderWidth, setSliderWidth] = useState(414);
  const [itemWidth, setItemWidth] = useState(414);
  const images = props.items;

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.carouselImage} source={item.source} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>OPEN COFFEE PARTIES</Text>
      </View>
      <Carousel
        style={styles.carouselContainer}
        data={images}
        renderItem={_renderItem}
        currentScene={props.currentScene}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={props.onChangeScene}
      />
      <Pagination
        style={styles.dots}
        dotsLength={images.length}
        activeDotIndex={props.currentScene}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.9}
        inactiveDotScale={1}
        style={styles.dotContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    flexDirection: "column",
  },
  slide: {
    flex: 7,
    flexDirection: "column",
    marginHorizontal: 40,
    width: Dimensions.get("window").width - 80,
  },
  carouselImage: {
    marginTop: 20,
    flex: 8,
    resizeMode: "contain",
    width: "100%",
  },
  carouselTitle: {
    marginTop: 20,
    marginBottom: 0,
    flex: 2,
    paddingHorizontal: 20,
    color: "black",
    textAlign: "center",
    fontSize: 24,
  },
  carouselDescription: {
    flex: 2,
    marginTop: 0,
    paddingHorizontal: 0,
    fontSize: 16,
    lineHeight: 28,
    color: "black",
    textAlign: "center",
  },
  paginationContainer: {
    position: "relative",
    paddingVertical: 2,
    flex: 0.2,
    flexDirection: "row",
  },
  activeDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 3,
    backgroundColor: "grey",
  },
  inactiveDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 3,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "grey",
  },
  titleText: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 10,
  },
  titleContainer: {
    backgroundColor: "rgb(198, 212, 169)",
    borderBottomRightRadius: 20,
  },
});
