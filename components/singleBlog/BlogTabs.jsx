import React, { useState } from "react";
import {
	TouchableOpacity,
	FlatList,
	Text,
	View,
	StyleSheet,
} from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
	return (
		<TouchableOpacity
			style={styles.btn(name, activeTab)}
			onPress={onHandleSearchType}
		>
			<Text style={styles.btnText(name, activeTab)}>{name}</Text>
		</TouchableOpacity>
	);
};

const BlogTabs = ({ tabs, activeTab, setActiveTab }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={tabs}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						onHandleSearchType={() => setActiveTab(item)}
					/>
				)}
				contentContainerStyle={{ columnGap: SIZES.small / 2 }}
				keyExtractor={(item) => item}
			/>
		</View>
	);
};

export default BlogTabs;

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.small,
		marginBottom: SIZES.small / 2,
	},
	btn: (name, activeTab) => ({
		paddingVertical: SIZES.medium,
		paddingHorizontal: SIZES.xLarge,
		backgroundColor: name === activeTab ? COLORS.tertiary : COLORS.secondary,
		borderRadius: SIZES.medium,
		marginLeft: 2,
	}),
	btnText: (name, activeTab) => ({
		fontFamily: "DMMedium",
		fontSize: SIZES.small,
		color: COLORS.white,
	}),
});
