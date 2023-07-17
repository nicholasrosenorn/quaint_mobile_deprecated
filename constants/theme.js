const COLORS = {
  primary: "#A2DED0",
  secondary: "#555555",
  tertiary: "#A2DED0",

  gray: "#555555",
  lightGray: "#C1C0C8",

  white: "#FFFFFF",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "LBRegular",
  medium: "LBItalic",
  bold: "LBBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
