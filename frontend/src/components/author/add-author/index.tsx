import { FC } from "react";
import { Text, View } from "react-native"
import { AddAuthorStyles } from "./styles";

interface AddAuthorProps {}

export const AddAuthor: FC<AddAuthorProps> = ({}) => {
  return (
    <View>
      <Text>AddAuthor component created!</Text>
    </View>
  );
};
