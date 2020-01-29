import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    headerHeight: number;
    footerHeight: number;
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
