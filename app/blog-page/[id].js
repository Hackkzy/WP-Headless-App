import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
	RefreshControl,
} from "react-native";

import {
	BlogHeader,
	BlogTabs,
	ScreenHeaderBtn,
	BlogContent,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hooks/useFetch";

const tabs = ["Blog Content", "Comments"];

const BlogPage = () => {
	const params = useSearchParams();
	const router = useRouter();

	const { data, isLoading, error, refetch } = useFetch(`posts/${params.id}`);

	const [activeTab, setActiveTab] = useState(tabs[0]);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		refetch();
		setRefreshing(false);
	}, []);

	const displayTabContent = () => {
		switch (activeTab) {
			case "Blog Content":
				return <BlogContent postContent={data.content.rendered ?? "N/A"} />;
			case "Comments":
				return <Text>Comments(Coming Soon)</Text>;
			default:
				return null;
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.left}
							dimension="60%"
							handlePress={() => router.back()}
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
					),
					headerTitle: "",
				}}
			/>
			<>
				<ScrollView
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				>
					{isLoading ? (
						<ActivityIndicator size="large" color={COLORS.primary} />
					) : error ? (
						<Text>Something went wrong</Text>
					) : data.length === 0 ? (
						<Text>No data available</Text>
					) : (
						<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
							<BlogHeader
								featuredImage={data.blp_featured_image_url}
								postTitle={data.title.rendered}
								authorName={data.blp_author_name}
								publishDate={data.date_gmt}
							/>
							<BlogTabs
								tabs={tabs}
								activeTab={activeTab}
								setActiveTab={setActiveTab}
							/>

							{displayTabContent()}
						</View>
					)}
				</ScrollView>
			</>
		</SafeAreaView>
	);
};

export default BlogPage;
