import { Tabs } from "expo-router";
import { Text } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: COLORS.tertiary,
				tabBarInactiveTintColor: COLORS.white,
				tabBarStyle: {
					// marginLeft: 50,
					// marginRight: 50,
					// marginBottom: 30,
					// borderRadius: 35,
					// position: "absolute",
					// paddingHorizontal: 20,
					backgroundColor: COLORS.primary,
				},
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name='home' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='posts'
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name='newspaper' size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
