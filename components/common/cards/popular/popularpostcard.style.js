import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    padding: SIZES.small,
    backgroundColor: selectedJob === item.post_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.post_id? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  post_user: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 2,
  },
  post_date: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 3
  },
  category: {
    paddingVertical: SIZES.small / 3,
    paddingHorizontal: SIZES.small/2,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignSelf: 'flex-start'
  },
  categoryText: {
    fontFamily: FONT.regular,
    color: COLORS.gray,
    fontSize: SIZES.small,
  },
  postTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  postFooter: {
    paddingTop: SIZES.small / 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.post_id ? COLORS.white : COLORS.secondary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
