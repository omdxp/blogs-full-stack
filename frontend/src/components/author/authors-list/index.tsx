import { FC } from "react";
import { Text, View } from "react-native"
import { AuthorsListStyles } from "./styles";

interface AuthorsListProps {}

export const AuthorsList: FC<AuthorsListProps> = ({}) => {
  return (
    <View>
      <Text>AuthorsList component created!</Text>
    </View>
  );
};
