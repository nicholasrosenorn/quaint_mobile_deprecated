import { StyleSheet } from "react-native";

import {COLORS, SHADOWS, SIZES, FONT} from "../../../constants";

const styles = StyleSheet.create({ 
	container: {
		marginTop: SIZES.medium,
	},
	headerText: {
		fontSize: SIZES.large * 1.3,
		fontFamily: FONT.bold,
		marginBottom: SIZES.xLarge,
		marginHorizontal: SIZES.medium,
	},
	cardContainer: {
		gap: SIZES.medium,
	},
	postTypeContainer : { 
		margin: SIZES.medium,
		gap: SIZES.xSmall / 3,
	},
	touchableType: { 
		borderBottomColor: COLORS.lightGray,
		borderBottomWidth:1,
		
	},
	postTypeText: {
		fontFamily: FONT.bold,
		fontSize: SIZES.medium,
	},
	postTypeDesc: {
		fontFamily: FONT.regular,
		fontSize: SIZES.small,
	},

})

export default styles;