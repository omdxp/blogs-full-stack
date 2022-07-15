import { Text, View } from "react-native";

import { AddBlog } from "components/blog/add-blog";
import { BlogsList } from "components/blog/blogs-list";
import { BlogsStyles } from "./styles";
import { EditBlog } from "components/blog/edit-blog";
import { FC } from "react";
import { globalStyles } from "styles";

interface BlogsScreenProps {}

export const BlogsScreen: FC<BlogsScreenProps> = ({}) => {
  return (
    <View style={globalStyles.container}>
      <AddBlog />
      <BlogsList />
      <EditBlog />
    </View>
  );
};
