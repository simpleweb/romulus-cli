import "styled-components";

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
