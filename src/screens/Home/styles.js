import { StyleSheet } from "react-native";

import colors from "../../assets/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 100,
    width: 300
  },
  button: {
    backgroundColor: colors.green.normal,
    marginTop: 10,
    padding: 10,
    borderRadius: 6
  },
  text: {
    color: colors.white,
    fontWeight: "bold"
  }
});

export default styles;
