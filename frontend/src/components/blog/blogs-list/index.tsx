import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { formatDistanceToNow, parseISO } from "date-fns";

import { Blog } from "models";
import { BlogsListStyles } from "./styles";
import { FC } from "react";
import { testAuthors } from "test-data/authors";

interface BlogsListProps {
  blogs: Blog[];
  onItemPress: (item: Blog) => void;
  onItemLongPress: (blog: Blog) => void;
}

export const BlogsList: FC<BlogsListProps> = ({
  blogs,
  onItemPress,
  onItemLongPress,
}) => {
  return (
    <FlatList
      data={blogs}
      keyExtractor={(blog) => `${blog.id}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onItemPress(item)}
          onLongPress={() => onItemLongPress(item)}
          style={BlogsListStyles.item}
        >
          <View>
            <Text style={BlogsListStyles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={BlogsListStyles.body} numberOfLines={1}>
              {item.body}
            </Text>
            <Text style={BlogsListStyles.author}>
              {testAuthors[item.author].name}
            </Text>
          </View>
          <View>
            <Text style={BlogsListStyles.author}>
              {formatDistanceToNow(parseISO(item.updatedAt))} ago
            </Text>
          </View>
        </TouchableOpacity>
      )}
      ListEmptyComponent={() => (
        <Text style={BlogsListStyles.emptyText}>No blogs found</Text>
      )}
    />
  );
};
