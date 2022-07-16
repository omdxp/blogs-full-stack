import { Dimensions, StyleSheet } from "react-native";

import { colors } from "styles/colors";

export const CommentsListStyles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayDark,
  },
  body: {
    fontSize: 18,
    marginRight: 10,
    color: colors.blue,
    width: "70%",
  },
});
