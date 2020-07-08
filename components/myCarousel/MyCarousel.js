import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
// import { render } from "react-dom";
// import { First } from "./First";
// import { Second } from "./Second";
// import { Third } from "./Third";

export default MyCarousel = (props) => {
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
    <View>
      <Carousel
        data={props.images}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={handleChangeScene}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={currentScene}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.9}
        inactiveDotScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    marginHorizontal: 40,
    width: Metrics.SCREEN_WIDTH - 80,
  },
  carouselImage: {
    resizeMode: "contain",
    width: "100%",
  },
  carouselTitle: {
    marginTop: 50,
    paddingHorizontal: 20,
    color: "white",
    textAlign: "center",
    fontSize: 28,
  },
  carouselDescription: {
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 20,
    lineHeight: 28,
    color: "white",
    textAlign: "center",
  },
  paginationContainer: {
    position: "relative",
    paddingVertical: 2,
  },
  activeDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 3,
    backgroundColor: Colors.yellow,
  },
  inactiveDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 3,
    borderWidth: 2,
    backgroundColor: Colors.transparent(0.1),
    borderColor: Colors.white,
  },
});

// export class MyCarousel extends Component {}
//   _renderItem = ({ item, indes }) => {
//     return (
//       <View>
//         <Text>This is render Item</Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.title}>
//           <Text style={styles.titleContent}>OPEN COFFEE PARTIES</Text>
//         </View>
//         {/* <View>
//           <Text>I am a Carousel</Text>
//         </View> */}
//         <View>
//           <Carousel
//             ref={(c) => {
//               this._carousel = c;
//             }}
//             data={this.state.entries}
//             renderItem={this._renderItem}
//             sliderWidth={sliderWidth}
//             itemWidth={itemWidth}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// styles = StyleSheet.create({
//   container: {
//     flex: 6,
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   title: {
//     height: 40,
//     backgroundColor: "rgb(198, 212, 169)",
//     borderBottomRightRadius: 15,
//     width: Dimensions.get("window").width,
//   },
//   titleContent: {
//     fontSize: 18,
//     // textAlign: "center",
//     textAlignVertical: "center",
//     paddingVertical: 9,
//     paddingLeft: 20,
//   },
// });
