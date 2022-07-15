import { FC } from "react";
import { Text, View } from "react-native"
import { CommentsListStyles } from "./styles";

interface CommentsListProps {}

export const CommentsList: FC<CommentsListProps> = ({}) => {
  return (
    <View>
      <Text>CommentsList component created!</Text>
    </View>
  );
};
