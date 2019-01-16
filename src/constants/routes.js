import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home";
import AlertsScreen from "../screens/Alerts";

const routes = {
  Home: {
    screen: HomeScreen,
    path: "/",
    navigationOptions: {
      header: null
    }
  },
  Alerts: {
    screen: AlertsScreen,
    path: "/alerts",
    navigationOptions: {
      title: "Alertas",
      headerTintColor: "#13827d",
      headerStyle: {
        backgroundColor: "#1aafa9"
      }
    }
  }
};

export const initialRouteName = {
  initialRouteName: "Home"
};

export default routes;
