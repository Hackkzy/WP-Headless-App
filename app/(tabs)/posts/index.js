import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Posts = () => {
	return (
		<View>
			<Stack.Screen
				options={{
					headerShadowVisible: false,

					headerTitle: "Posts",
				}}
			/>
			<Text>POSTSTSTTST</Text>
		</View>
	);
};

export default Posts;

const styles = StyleSheet.create({});
