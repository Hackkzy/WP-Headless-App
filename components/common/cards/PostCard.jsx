import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";
import { checkImageURL, decodeHTMLEntities } from "../../../utils";

const PostCard = ({ item, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => handleCardPress(item)}
		>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: checkImageURL(item?.blp_featured_image_url)
							? item.blp_featured_image_url
							: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.postTitle} numberOfLines={1}>
					{decodeHTMLEntities(item.title.rendered)}
				</Text>
				<View style={styles.infoWrapper}>
					<Text style={styles.publisher}>{item.blp_author_name}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default PostCard;

const styles = StyleSheet.create({
	container: {
		padding: SIZES.medium,
		backgroundColor: "#FFF",
		borderRadius: SIZES.medium,
	},
	imageContainer: {
		height: 200,
		borderRadius: SIZES.medium,
		justifyContent: "center",
	},
	logoImage: {
		width: "100%",
		height: "100%",
		borderRadius: SIZES.medium,
	},
	infoContainer: {
		marginTop: SIZES.large,
	},
	postTitle: {
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: COLORS.primary,
	},
	infoWrapper: {
		flexDirection: "row",
		marginTop: 5,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	publisher: {
		fontSize: SIZES.medium - 2,
		fontFamily: FONT.regular,
		color: COLORS.primary,
	},
});
