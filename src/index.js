import React, { Component } from "react";
import { View, StatusBar } from "react-native";

import Routes from "./components/Navigator";
import colors from "./assets/colors";

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={colors.green.normal}
          barStyle="light-content"
        />
        <Routes />
      </View>
    );
  }
}

export default App;
