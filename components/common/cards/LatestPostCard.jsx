import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";
import { checkImageURL, decodeHTMLEntities } from "../../../utils";

const LatestPostCard = ({ item, selectedPost, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={styles.container(selectedPost, item)}
			onPress={() => handleCardPress(item)}
		>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: checkImageURL(item?.blp_featured_image_url)
							? item.blp_featured_image_url
							: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
					}}
					resizeMode='contain'
					style={styles.logoImage}
				/>
			</View>
			<View style={styles.infoContainer}>
				<Text
					style={styles.postTitle(selectedPost, item)}
					numberOfLines={1}
				>
					{decodeHTMLEntities(item.title.rendered)}
				</Text>
				<View style={styles.infoWrapper}>
					<Text style={styles.publisher(selectedPost, item)}>
						{item.blp_author_name}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default LatestPostCard;

const styles = StyleSheet.create({
	container: (selectedPost, item) => ({
		width: 250,
		padding: SIZES.medium,
		backgroundColor: selectedPost === item.id ? COLORS.primary : "#FFF",
		borderRadius: SIZES.medium,
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	}),
	imageContainer: {
		height: 130,
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
	postTitle: (selectedPost, item) => ({
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: selectedPost === item.id ? COLORS.white : COLORS.primary,
	}),
	infoWrapper: {
		flexDirection: "row",
		marginTop: 5,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	publisher: (selectedPost, item) => ({
		fontSize: SIZES.medium - 2,
		fontFamily: FONT.regular,
		color: selectedPost === item.id ? COLORS.white : COLORS.primary,
	}),
});
