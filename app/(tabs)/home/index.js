import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";
import { ScreenHeaderBtn, Welcome, LatestPosts } from "../../../components";

const Home = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={{ uri: "https://i.pravatar.cc/300" }}
							dimension='100%'
						/>
					),
					headerTitle: "BiliPlugins",
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
								router.push(`/search/${searchTerm}`);
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
