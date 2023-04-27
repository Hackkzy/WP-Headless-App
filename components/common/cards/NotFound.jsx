import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONT, SIZES } from "../../../constants";

const NotFound = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}></View>
			<View style={styles.infoContainer}>
				<Text style={styles.infoTitle} numberOfLines={2}>
					No posts found
				</Text>
				<Text style={styles.infoDescription} numberOfLines={2}>
					We couldn't find any posts matching your search term
				</Text>
			</View>
		</View>
	);
};

export default NotFound;

const styles = StyleSheet.create({
	container: {
		padding: SIZES.medium,
		borderRadius: SIZES.medium,
		alignItems: "center",
	},
	imageContainer: {
		height: 200,
		borderRadius: SIZES.medium,
		justifyContent: "center",
	},
	infoTitle: {
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: COLORS.white,
		textAlign: "center",
	},
	logoImage: {
		width: "100%",
		height: "100%",
		borderRadius: SIZES.medium,
	},
	infoContainer: {
		marginTop: SIZES.large,
	},
	infoDescription: {
		fontSize: SIZES.medium,
		fontFamily: FONT.medium,
		color: COLORS.gray,
		textAlign: "center",
	},
});
