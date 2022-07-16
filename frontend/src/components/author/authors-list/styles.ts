import { Dimensions, StyleSheet } from "react-native";

import { colors } from "styles/colors";

export const AuthorsListStyles = StyleSheet.create({
  item: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 5,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: Dimensions.get("window").width - 40,
  },
  author: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.grayDark,
  },
});
