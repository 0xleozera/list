import React, { Component } from "react";
import { View, StatusBar } from "react-native";

import Routes from "./components/Navigator";

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#1aafa9" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}

export default App;
