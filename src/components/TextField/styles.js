import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  icon: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 10,
    height: 40,
    backgroundColor: "#FFF"
  },
  field: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderWidth: 1,
    borderColor: "#FFF",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginRight: 10,
    height: 40,
    backgroundColor: "#FFF"
  }
});

export default styles;
