import { StyleSheet } from "react-native";

import colors from "../../assets/colors";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  icon: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.white,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 10,
    height: 40,
    backgroundColor: colors.white
  },
  field: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderWidth: 1,
    borderColor: colors.white,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginRight: 10,
    height: 40,
    backgroundColor: colors.white
  }
});

export default styles;
