import React, { Component } from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";

class List extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <FlatList />
      </View>
    );
  }
}

export default List;
