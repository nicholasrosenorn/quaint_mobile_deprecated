import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: '#FFF',
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  pictureContainer: {
    margin: SIZES.small,
  },
  postImage: {
    width: 70,
    height: 70,
  },
  textContainer: {
    flex: 1,
    margin: SIZES.small,
  },
  post_title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.gray,
    paddingTop:SIZES.small,
  },
  post_author: {
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
    color: COLORS.lightGray,
    paddingTop: SIZES.small / 3,
  },
  post_classification: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.lightGray,
    textTransform: "capitalize",
    borderRadius: SIZES.medium/1.2,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    alignSelf: 'flex-start',
    paddingVertical: SIZES.small / 3,
    paddingHorizontal: SIZES.small,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.small,
  }
});

export default styles;
