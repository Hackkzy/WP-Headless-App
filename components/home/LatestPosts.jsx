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
		_fields: "id,title,author,featured_media",
		per_page: 5,
	});

	const [selectedPost, setSelectedPost] = useState(0);

	const handleCardPress = (item) => {
		router.push(`/post/${item.id}`);
		setSelectedPost(item.id);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Latest Posts</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<LatestPostCard
								item={item}
								selectedPost={selectedPost}
								handleCardPress={handleCardPress}
							/>
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
		color: COLORS.primary,
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
