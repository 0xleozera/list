import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import brands from "../../assets/brands";
import styles from "./styles";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Image style={styles.logo} source={{ uri: brands.main }} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Alerts")}
          >
            <Text style={styles.text}>{"CONTINUAR"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
