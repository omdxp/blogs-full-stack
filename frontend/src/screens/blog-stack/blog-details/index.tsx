import { Text, View } from "react-native";

import { AddComment } from "components/comment/add-comment";
import { BlogDetailsStyles } from "./styles";
import { CommentsList } from "components/comment/comments-list";
import { EditComment } from "components/comment/edit-comment";
import { FC } from "react";
import { globalStyles } from "styles";

interface BlogDetailsScreenProps {}

export const BlogDetailsScreen: FC<BlogDetailsScreenProps> = ({}) => {
  return (
    <View style={globalStyles.container}>
      <AddComment />
      <CommentsList />
      <EditComment />
    </View>
  );
};
