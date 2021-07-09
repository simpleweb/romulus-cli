import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import <%= name %> from "<%= name %>/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => <%= name %>);
