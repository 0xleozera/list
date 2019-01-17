import React, { Component } from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../assets/colors";
import styles from "./styles";

class TextField extends Component {
  render() {
    const { onChange, value, icon } = this.props;

    return (
      <View style={styles.wrapper}>
        <Icon
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.gray.dark}
        />
        <TextInput
          style={styles.field}
          value={value}
          onChangeText={value => onChange(value)}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

export default TextField;
