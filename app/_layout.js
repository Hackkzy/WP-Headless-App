import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

export const unstable_settings = {
	// Ensure any route can link back to `/`
	initialRouteName: "index",
};

const Layout = () => {
	const [fontsLoaded] = useFonts({
		DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
		DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
		DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return <SplashScreen />;
	}

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: "Welcome",
				}}
			/>
		</Stack>
	);
};

export default Layout;
