import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { AddComment } from "../add-comment";
import { Comment } from "models";
import { CommentsListStyles } from "./styles";
import { FC } from "react";
import { testAuthors } from "test-data/authors";

interface CommentsListProps {
  comments: Comment[];
  onItemPress: (comment: Comment) => void;
}

export const CommentsList: FC<CommentsListProps> = ({
  comments,
  onItemPress,
}) => {
  return (
    <FlatList
      data={comments}
      keyExtractor={(comment) => `${comment.id}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={CommentsListStyles.item}
          onPress={() => onItemPress(item)}
        >
          <Text style={CommentsListStyles.body} numberOfLines={5}>
            {item.body}
          </Text>
          <Text>{testAuthors[item.author].name}</Text>
        </TouchableOpacity>
      )}
      ListFooterComponent={() => (
        <AddComment onSubmit={(item) => console.log(item)} />
      )}
    />
  );
};
