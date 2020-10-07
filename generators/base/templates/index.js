import "react-native-gesture-handler";
<% if (usingReactQuery) { -%>
import { setConsole } from "react-query";
<% } -%>
import { AppRegistry } from "react-native";
import <%= name %> from "<%= name %>/App";
import { name as appName } from "./app.json";

<% if (usingReactQuery) { -%>
setConsole({
  log: console.log,
  warn: console.warn,
  error: console.warn,
});
<% } -%>

AppRegistry.registerComponent(appName, () => <%= name %>);
