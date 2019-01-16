import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class HomeScreen extends Component {
  state = {
    text: ""
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <View>
          <Text>{`Welcome To React Native!`}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: "#DDD" }}
            onPress={() => this.props.navigation.navigate("Alerts")}
          >
            <Text>{"Continuar"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const buttonCommonStyle = {
  margin: 10,
  width: 100,
  height: 100,
  backgroundColor: "#fff",
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: "#ddd",
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center"
};

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee"
  },
  space: {
    margin: 5
  },
  menu: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 60
  },
  menuLabel: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5
  },
  menuButtonAndroid: {
    ...buttonCommonStyle,
    elevation: 2
  },
  menuButton: {
    ...buttonCommonStyle,
    shadowColor: "#9a9a9a",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2
  }
});

export default HomeScreen;
