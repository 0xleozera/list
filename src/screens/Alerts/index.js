import React, { Component } from "react";
import { View } from "react-native";

import TextField from "../../components/TextField";
import styles from "./styles";

class ActorsScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TextField />
      </View>
    );
  }
}

export default ActorsScreen;
