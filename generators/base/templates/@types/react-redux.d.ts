import "react-redux";
import { RootState } from "<%= name %>/App/Reducers";

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}
