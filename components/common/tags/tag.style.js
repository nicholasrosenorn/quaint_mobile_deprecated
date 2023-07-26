import { StyleSheet } from "react-native";

import {COLORS, SHADOWS, SIZES, FONT} from "../../../constants";

const styles = StyleSheet.create({ 
	tag: {
		borderRadius: SIZES.medium/1.2,
		borderWidth: 1,
		borderColor: COLORS.lightGray,
		alignSelf: 'flex-start',
		paddingVertical: SIZES.small / 3,
		paddingHorizontal: SIZES.small,
	  },
	  tagSelected:{
		borderRadius: SIZES.medium/1.2,
		borderWidth: 1,
		borderColor: COLORS.lightGray,
		alignSelf: 'flex-start',
		paddingVertical: SIZES.small / 3,
		paddingHorizontal: SIZES.small,
		backgroundColor: COLORS.lightGray,
	},
	tagText:{
		color: COLORS.lightGray,
		fontSize: SIZES.small + 2,
		fontFamily: FONT.regular,
		textTransform: "capitalize",
	},
	tagTextSelected:{
		color: COLORS.white,
		fontSize: SIZES.small + 2,
		fontFamily: FONT.regular,
		textTransform: "capitalize",
	},
	container: {
		marginTop: SIZES.small,
		marginBottom: SIZES.small / 2,
	  },
	  btn: (name, activeTab) => ({
		paddingVertical: SIZES.medium,
		paddingHorizontal: SIZES.xLarge,
		backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
		borderRadius: SIZES.medium,
		marginLeft: 2,
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	  }),
	  btnText: (name, activeTab) => ({
		fontFamily: FONT.regular,
		fontSize: SIZES.small,
		color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
	  }),
});

export default styles;