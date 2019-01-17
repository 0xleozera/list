import React, { Component } from "react";
import { View } from "react-native";

import ActorsData from "../../utils/data";
import TextField from "../../components/TextField";
import List from "../../components/List";
import styles from "./styles";

class ActorsScreen extends Component {
  state = {
    data: ActorsData,
    value: ""
  };

  render() {
    const { data, value } = this.state;

    return (
      <View style={styles.wrapper}>
        <TextField value={value} />
        <List data={data} />
      </View>
    );
  }
}

export default ActorsScreen;
