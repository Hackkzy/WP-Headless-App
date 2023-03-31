import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	Image,
	TouchableOpacity,
	View,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { WP_SITE_URL } from "@env";

import { COLORS, FONT, icons, SIZES } from "../../../constants";
import LatestPostCard from "../../../components/common/cards/LatestPostCard";
import axios from "axios";

const Posts = () => {
	const router = useRouter();

	const [posts, setPosts] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);

	const getPosts = async () => {
		setIsLoading(true);
		try {
			const options = {
				method: "GET",
				url: `${WP_SITE_URL}/wp-json/wp/v2/posts`,
				params: {
					per_page: 10,
					_fields: "id,title,blp_author_name,blp_featured_image_url",
					page: page,
				},
			};
			const response = await axios.request(options);
			setPosts((prevPosts) => [...prevPosts, ...response.data]);
			setHeaders(response.headers);
		} catch (error) {
			setError(error);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const totalPages = headers["x-wp-totalpages"];

	useEffect(() => {
		getPosts();
	}, [page]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerTitle: "Posts",
				}}
			/>
			<FlatList
				data={posts}
				renderItem={({ item }) => (
					<LatestPostCard
						item={item}
						handleCardPress={() =>
							router.push(`/blog-page/${item.id}`)
						}
					/>
				)}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{
					padding: SIZES.medium,
					rowGap: SIZES.medium,
				}}
				ListFooterComponent={() => (
					<>
						<View style={styles.loaderContainer}>
							{isLoading ? (
								<ActivityIndicator
									size='large'
									color={COLORS.primary}
								/>
							) : (
								error && <Text>Oops something went wrong</Text>
							)}
						</View>
					</>
				)}
				onEndReached={() => {
					if (!isLoading && page < totalPages) {
						setPage((prevPage) => prevPage + 1);
					}
				}}
			/>
		</SafeAreaView>
	);
};

export default Posts;

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	searchTitle: {
		fontFamily: FONT.bold,
		fontSize: SIZES.xLarge,
		color: COLORS.primary,
	},
	noOfSearchedJobs: {
		marginTop: 2,
		fontFamily: FONT.medium,
		fontSize: SIZES.small,
		color: COLORS.primary,
	},
	loaderContainer: {
		marginTop: SIZES.medium,
	},
	footerContainer: {
		marginTop: SIZES.small,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
	},
	paginationButton: (active) => ({
		width: 30,
		height: 30,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: active ? COLORS.tertiary : COLORS.gray2,
	}),
	paginationImage: {
		width: "60%",
		height: "60%",
		tintColor: COLORS.white,
	},
	paginationTextBox: {
		width: 30,
		height: 30,
		borderRadius: 2,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.white,
	},
	paginationText: {
		fontFamily: FONT.bold,
		fontSize: SIZES.medium,
		color: COLORS.primary,
	},
});
