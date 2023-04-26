import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import moment from "moment/moment";

import { COLORS, FONT, icons, SIZES } from "../../constants";
import { checkImageURL, decodeHTMLEntities } from "../../utils";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.64;
const CARD_ASPECT_RATIO = 240 / 198;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;
const IMAGE_CONTAINER_ASPECT_RATIO = 240 / 140;
const IMAGE_CONTAINER_WIDTH = CARD_WIDTH;
const IMAGE_CONTAINER_HEIGHT =
  IMAGE_CONTAINER_WIDTH / IMAGE_CONTAINER_ASPECT_RATIO;

const BlogHeader = ({ featuredImage, postTitle, authorName, publishDate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(featuredImage)
              ? featuredImage
              : "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
          }}
          style={styles.logoImage}
          resizeMode='contain'
        />
      </View>

      <View style={styles.postTitleBox}>
        <Text style={styles.postTitle}>{decodeHTMLEntities(postTitle)}</Text>
      </View>

      <View style={styles.postInfoBox}>
        <Text style={styles.authorName}>{authorName} </Text>
        <View style={styles.postDateBox}>
          <Text style={styles.postDate}>
            <Image
              source={icons.calendar}
              resizeMode='contain'
              style={styles.dateIcon}
            />
            {moment(publishDate).local().format("MMM DD, YYYY")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BlogHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  logoImage: {
    width: IMAGE_CONTAINER_WIDTH,
    height: IMAGE_CONTAINER_HEIGHT,
    borderRadius: SIZES.medium,
  },
  postTitleBox: {
    marginTop: SIZES.small,
  },
  postTitle: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  postInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  authorName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.medium,
  },
  postDateBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dateIcon: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  postDate: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});
