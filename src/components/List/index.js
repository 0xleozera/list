import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

import styles from "./styles";

class List extends Component {
  constructor(props) {
    super(props);
  }

  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    return (
      <ListItem
        roundAvatar
        key={item.id}
        title={item.name}
        subtitle={item.description}
        avatar={{ uri: item.picture }}
        hideChevron
        containerStyle={styles.listContainer}
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
        avatarStyle={styles.avatar}
      />
    );
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    const { data } = this.props;

    return (
      <View style={styles.wrapper}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default List;
