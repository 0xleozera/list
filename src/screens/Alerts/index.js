import React, { Component } from "react";
import { View, Platform } from "react-native";

import ActorsData from "../../utils/data";
import TextField from "../../components/TextField";
import List from "../../components/List";

import styles from "./styles";
import debounce from "../../utils/debounce";

class AlertsScreen extends Component {
  state = {
    data: ActorsData,
    value: ""
  };

  getIcon = () => (Platform.OS === "ios" ? "ios-search" : "md-search");

  onChange = value =>
    this.setState({ value }, debounce(() => this.filterData(value)));

  filterData = value => {
    const newData = ActorsData.filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) === 0
    );

    this.setState({ data: newData });
  };

  render() {
    const { data, value } = this.state;

    return (
      <View style={styles.wrapper}>
        <TextField
          value={value}
          onChange={value => this.onChange(value)}
          icon={this.getIcon()}
        />
        <List data={data} />
      </View>
    );
  }
}

export default AlertsScreen;
