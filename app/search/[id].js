import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { WP_SITE_URL } from "@env";

import { COLORS, SIZES } from "../../constants";
import PostCard from "../../components/common/cards/PostCard";
import axios from "axios";
import NotFound from "../../components/common/cards/NotFound";

const Posts = () => {
	const params = useSearchParams();
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
					search: params.searchTerm,
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
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.primary },
					headerShadowVisible: false,
					headerTitle: "Search",
					headerTitleStyle: { color: COLORS.white },
				}}
			/>
			<FlatList
				data={posts}
				renderItem={({ item }) => (
					<PostCard
						item={item}
						handleCardPress={() =>
							router.push({
								pathname: "/blog-page",
								params: { postType: "posts", id: item.id },
							})
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
								<ActivityIndicator size="large" color={COLORS.tertiary} />
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
				ListEmptyComponent={isLoading ? false : <NotFound />}
			/>
		</SafeAreaView>
	);
};

export default Posts;

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	loaderContainer: {
		marginTop: SIZES.medium,
	},
	infoText: {
		color: COLORS.white,
	},
});
