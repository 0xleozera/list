import { StyleSheet } from "react-native";

import colors from "../../assets/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  separator: {
    height: 1,
    width: "78%",
    backgroundColor: colors.gray.light,
    marginLeft: "18%"
  },
  listContainer: {
    borderBottomColor: "transparent",
    borderBottomWidth: 0
  },
  title: {
    fontWeight: "400",
    color: colors.black,
    paddingTop: 5,
    paddingLeft: 20,
    paddingBottom: 0
  },
  subtitle: {
    fontWeight: "normal",
    paddingLeft: 20,
    paddingBottom: 0
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 40
  }
});

export default styles;
