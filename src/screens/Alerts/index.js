import React, { Component } from "react";
import { View } from "react-native";

import ActorsData from "../../utils/data";
import TextField from "../../components/TextField";
import List from "../../components/List";
import styles from "./styles";

class AlertsScreen extends Component {
  state = {
    data: ActorsData,
    value: ""
  };

  onChange = value => this.setState({ value });

  render() {
    const { data, value } = this.state;

    return (
      <View style={styles.wrapper}>
        <TextField value={value} onChange={value => this.onChange(value)} />
        <List data={data} />
      </View>
    );
  }
}

export default AlertsScreen;
