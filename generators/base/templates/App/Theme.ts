import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: number;
    fonts: {
      family: string;
    };
    colors: {
      white: string;
      grey: string;
    };
  }
}

const theme: DefaultTheme = {
  spacing: 16,
  fonts: {
    family: "System",
  },
  colors: {
    white: "#FFFFFF",
    grey: "grey",
  },
};

export default theme;
