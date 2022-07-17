import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { formatDistanceToNow, parseISO } from "date-fns";

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
          <View>
            <Text>{testAuthors[item.author].name}</Text>
            <Text>{formatDistanceToNow(parseISO(item.updatedAt))} ago</Text>
          </View>
        </TouchableOpacity>
      )}
      ListFooterComponent={() => (
        <AddComment onSubmit={(item) => console.log(item)} />
      )}
    />
  );
};
