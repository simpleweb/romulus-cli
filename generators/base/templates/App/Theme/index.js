// @flow
import { Platform } from "react-native";

const headerHeight = Platform.OS === "ios" ? 65 : 54;

export default {
  headerHeight,
  footerHeight: 50,
  spacing: 16,
  fonts: {
    family: "System",
  },
  colors: {
    white: "#FFFFFF",
    grey: "grey",
  },
};
