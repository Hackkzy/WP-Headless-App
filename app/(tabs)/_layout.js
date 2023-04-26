import { Tabs } from "expo-router";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: COLORS.white,
				tabBarInactiveTintColor: COLORS.gray,
				headerShadowVisible: false,
				tabBarStyle: {
					backgroundColor: COLORS.primary,
					borderColor: COLORS.primary,
					flexDirection: "row",
				},
			}}
		>
			<Tabs.Screen
				name={"home"}
				options={{
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name={"posts"}
				options={{
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons
							name={focused ? "newspaper" : "newspaper-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
