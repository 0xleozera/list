import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import AppsNavigator from "./src/components/Navigator";

AppRegistry.registerComponent(appName, () => AppsNavigator);
