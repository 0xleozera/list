import HomeScreen from "../screens/Home";
import AlertsScreen from "../screens/Alerts";

const routes = {
  Home: {
    screen: HomeScreen,
    path: "/"
  },
  Alerts: {
    screen: AlertsScreen,
    path: "/alerts",
    navigationOptions: {
      title: "Alertas"
    }
  }
};

export const initialRouteName = {
  initialRouteName: "Home"
};
export default routes;
