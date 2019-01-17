import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home";
import AlertsScreen from "../screens/Alerts";

import colors from "../assets/colors";

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
      headerTintColor: colors.green.dark,
      headerStyle: {
        backgroundColor: colors.green.normal
      }
    }
  }
};

export const initialRouteName = {
  initialRouteName: "Home"
};

export default routes;
