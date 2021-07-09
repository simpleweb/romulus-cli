import merge from "lodash.merge";
import { DefaultTheme } from "styled-components/native";

const palette = {
  white: "#ffffff",
  black: "#000000",
};

const light: DefaultTheme = {
  spacing: 16,
  fonts: {
    family: "System",
  },
  button: {
    DEFAULT: {
      background: palette.black,
      text: palette.white,
    },
  },
  text: {
    DEFAULT: {
      color: palette.black,
    },
  },
};

const dark: DefaultTheme = merge({}, light, {
  button: {
    DEFAULT: {
      background: palette.white,
      text: palette.black,
    },
  },
  text: {
    DEFAULT: {
      color: palette.white,
    },
  },
} as DefaultTheme);

export type TextVariants = "DEFAULT";
export type ButtonVariants = "DEFAULT";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: number;
    fonts: {
      family: string;
    };
    button: {
      [key in ButtonVariants]: {
        text: string;
        background: string;
      };
    };
    text: {
      [key in TextVariants]: {
        color: string;
      };
    };
  }
}

export default {
  light,
  dark,
};
