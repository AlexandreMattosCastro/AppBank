import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export const loginStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgb(0,0,0)",
  },

  view: {
    width: "95%",
  },

  cardTitle: {
    color: "rgb(0,0,0)",
    textAlign: "center",
    fontSize: 22,
  },

  cardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
  },
});
