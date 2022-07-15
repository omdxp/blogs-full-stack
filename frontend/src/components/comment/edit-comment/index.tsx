import { FC } from "react";
import { Text, View } from "react-native"
import { EditCommentStyles } from "./styles";

interface EditCommentProps {}

export const EditComment: FC<EditCommentProps> = ({}) => {
  return (
    <View>
      <Text>EditComment component created!</Text>
    </View>
  );
};
