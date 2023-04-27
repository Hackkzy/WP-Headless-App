import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";
import { ScreenHeaderBtn, Welcome, LatestPosts } from "../../../components";

const Home = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.primary },
					headerShadowVisible: false,
					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={{ uri: "https://i.pravatar.cc/300" }}
							dimension="100%"
						/>
					),
					headerTitle: "BiliPlugins/",
					headerTitleStyle: { color: COLORS.white },
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flex: 1,
						padding: SIZES.medium,
					}}
				>
					<Welcome
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						handleClick={() => {
							if (searchTerm) {
								router.push({
									pathname: `/search/${searchTerm}`,
									params: { searchTerm: searchTerm },
								});
							}
						}}
					/>
					<LatestPosts />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
