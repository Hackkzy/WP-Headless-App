import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import IframeRenderer, { iframeModel } from "@native-html/iframe-plugin";
import RenderHTML from "react-native-render-html";
import WebView from "react-native-webview";

const renderers = {
	iframe: IframeRenderer,
};

const customHTMLElementModels = {
	iframe: iframeModel,
};

import { COLORS, FONT, SIZES } from "../../constants";

const defaultTextProps = {
	selectable: true,
};

const BlogContent = ({ postContent }) => {
	const contentWidth = Dimensions.get("screen").width * 0.9;
	return (
		<View style={styles.container}>
			<RenderHTML
				renderers={renderers}
				WebView={WebView}
				source={{ html: postContent }}
				contentWidth={contentWidth}
				defaultTextProps={defaultTextProps}
				customHTMLElementModels={customHTMLElementModels}
				renderersProps={{
					iframe: {
						scalesPageToFit: true,
					},
				}}
				// ignoredStyles={["width", "height", "video"]}
				tagsStyles={{
					img: { height: 250, width: 350, resizeMode: "center" },
				}}
			/>
		</View>
	);
};

export default BlogContent;

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.large,
		backgroundColor: "#FFF",
		borderRadius: SIZES.medium,
		padding: SIZES.medium,
		overflow: "hidden",
	},
});
