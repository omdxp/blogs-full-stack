import { FC } from "react";
import { Text, View } from "react-native";
import { AuthorsStyles } from "./styles";

interface AuthorsScreenProps {}

export const AuthorsScreen: FC<AuthorsScreenProps> = ({}) => {
  return (
    <View>
      <Text>Authors screen created!</Text>
    </View>
  );
};
