import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { Blog } from "models";
import { BlogsListStyles } from "./styles";
import { FC } from "react";
import { testAuthors } from "test-data/authors";

interface BlogsListProps {
  blogs: Blog[];
  onItemPress: (blog: Blog) => void;
}

export const BlogsList: FC<BlogsListProps> = ({ blogs, onItemPress }) => {
  return (
    <FlatList
      data={blogs}
      keyExtractor={(blog) => `${blog.id}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onItemPress(item)}
          style={BlogsListStyles.item}
        >
          <Text style={BlogsListStyles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={BlogsListStyles.body} numberOfLines={1}>
            {item.body}
          </Text>
          <Text style={BlogsListStyles.author}>
            {testAuthors[item.author].name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};
