import { FC } from "react";
import { Text, View } from "react-native"
import { EditAuthorStyles } from "./styles";

interface EditAuthorProps {}

export const EditAuthor: FC<EditAuthorProps> = ({}) => {
  return (
    <View>
      <Text>EditAuthor component created!</Text>
    </View>
  );
};
