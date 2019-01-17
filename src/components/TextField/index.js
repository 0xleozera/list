import React, { Component } from "react";
import { View, TextInput, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../assets/colors";
import styles from "./styles";

class TextField extends Component {
  getIcon() {
    return Platform.OS === "ios" ? "ios-search" : "md-search";
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Icon
          style={styles.icon}
          name={this.getIcon()}
          size={20}
          color={colors.gray.dark}
        />
        <TextInput
          style={styles.field}
          onChangeText={searchString => this.setState({ searchString })}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

export default TextField;
