import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS } from "../../../constants";

const Posts = () => {
	return (
		<View>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
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
