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
	}
});

export default styles;