import { useState } from "react";
import { useRouter } from "expo-router";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
	StyleSheet,
} from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import LatestPostCard from "../common/cards/LatestPostCard";
import useFetch from "../../hooks/useFetch";

const LatestPosts = () => {
	const router = useRouter();
	const { data, isLoading, error } = useFetch("posts", {
		_fields: "id,title,blp_author_name,blp_featured_image_url",
		per_page: 5,
	});

	const handleCardPress = (item) => {
		router.push({ pathname : `/blog-page/${item.id}`, params: { postType: 'posts', id: item.id } });
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Latest Posts</Text>
				<TouchableOpacity onPress={() => router.push(`/posts`)}>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.tertiary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<LatestPostCard item={item} handleCardPress={handleCardPress} />
						)}
						keyExtractor={(item) => item.id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	);
};

export default LatestPosts;

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.xLarge,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerTitle: {
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: COLORS.white,
	},
	headerBtn: {
		fontSize: SIZES.medium,
		fontFamily: FONT.medium,
		color: COLORS.gray,
	},
	cardsContainer: {
		marginTop: SIZES.medium,
	},
});
