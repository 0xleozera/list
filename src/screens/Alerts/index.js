import React, { Component } from "react";
import { View } from "react-native";

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
        <TextField value={value} onChange={value => this.onChange(value)} />
        <List data={data} />
      </View>
    );
  }
}

export default AlertsScreen;
