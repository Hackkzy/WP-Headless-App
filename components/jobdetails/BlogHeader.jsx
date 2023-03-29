import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import moment from "moment/moment";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS, FONT, icons, SIZES } from "../../constants";
import { checkImageURL, decodeHTMLEntities } from "../../utils";

const BlogHeader = ({ featuredImage, postTitle, authorName, publishDate }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: checkImageURL(featuredImage)
						? featuredImage
						: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
				}}
				style={styles.logoImage}
				resizeMode="cover"
			/>
			<View style={styles.postTitleBox}>
				<Text style={styles.postTitle}>{decodeHTMLEntities(postTitle)}</Text>
			</View>

			<View style={styles.postInfoBox}>
				<Text style={styles.authorName}>{authorName} </Text>
				<View style={styles.postDateBox}>
					<Text style={styles.postDate}>
						<Image
							source={icons.calendar}
							resizeMode="contain"
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
		marginVertical: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	logoImage: {
		// width: "80%",
		// height: "80%",
	},
	postTitleBox: {
		marginTop: SIZES.small,
	},
	postTitle: {
		fontSize: SIZES.large,
		color: COLORS.primary,
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
		color: COLORS.primary,
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
