import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
	header_container: {
		flexDirection: "row",
		padding: SIZES.medium,
		alignItems: "center",
	},
	image_style: {
		width: 100,
		height: 100,
		borderRadius: SIZES.small / 1.25,
	},
	username_container: {
		paddingLeft: SIZES.medium,
	},
	username_text: {
		fontFamily: FONT.regular,
		fontSize: SIZES.xLarge,
	},
	follow_container:{
		flexDirection: "row",
		paddingTop: SIZES.small/2,
	},
	follow_text:{
		fontFamily: FONT.regular,
		fontSize: SIZES.small,
		paddingHorizontal: SIZES.small,
	},
	follow_touchables: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	edit_container:{
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderBottomColor: COLORS.lightGray,
		borderBottomWidth: 1,
		paddingHorizontal: SIZES.large,
		paddingBottom: SIZES.small,

	},
	edit_btn_container: {
		paddingHorizontal: SIZES.small,
	},
	edit_btn: {
		borderColor: COLORS.lightGray,
		borderWidth: 1,
		borderRadius: SIZES.large,
		padding: SIZES.xSmall,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		width: 160,
		backgroundColor: COLORS.veryLightGray,
	},

});

export default styles;
