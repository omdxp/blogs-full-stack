import { FC } from "react";
import { Text, View } from "react-native"
import { AddCommentStyles } from "./styles";

interface AddCommentProps {}

export const AddComment: FC<AddCommentProps> = ({}) => {
  return (
    <View>
      <Text>AddComment component created!</Text>
    </View>
  );
};
