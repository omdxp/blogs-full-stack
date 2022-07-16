import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  paragraph: {
    marginVertical: 10,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 10,
    width: "100%",
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
    marginVertical: 10,
  },
});
