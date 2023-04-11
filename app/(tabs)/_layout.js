import { Tabs } from "expo-router";
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
					backgroundColor: COLORS.primary,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons name={ focused ? 'home' : 'home-outline' } size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="posts"
				options={{
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons name={ focused ? 'newspaper' : 'newspaper-outline' } size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="pages"
				options={{
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons name={ focused ? 'document' : 'document-outline' } size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
