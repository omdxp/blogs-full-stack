import { Button, Text, View } from "react-native";
import { FC, useState } from "react";

import { AddBlog } from "components/blog/add-blog";
import { Blog } from "models";
import { BlogsList } from "components/blog/blogs-list";
import { BlogsStyles } from "./styles";
import { EditBlog } from "components/blog/edit-blog";
import { globalStyles } from "styles";
import { testBlogs } from "test-data/blogs";
import { useNavigation } from "@react-navigation/native";

interface BlogsScreenProps {}

export const BlogsScreen: FC<BlogsScreenProps> = ({}) => {
  const navigation = useNavigation<any>();
  const [addBlogVisible, setAddBlogVisible] = useState(false);
  const [editBlogVisible, setEditBlogVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  return (
    <View style={globalStyles.container}>
      <Button title="Add a Blog" onPress={() => setAddBlogVisible(true)} />
      <AddBlog
        visible={addBlogVisible}
        onClose={() => setAddBlogVisible(false)}
        onSubmit={(item) => console.log(item)}
      />
      <BlogsList
        blogs={testBlogs}
        onItemPress={(item) =>
          navigation.navigate("blog-details", { blog: item })
        }
        onItemLongPress={(item) => {
          setSelectedBlog(item);
          setEditBlogVisible(true);
        }}
      />
      <EditBlog
        blog={selectedBlog!}
        visible={editBlogVisible}
        onClose={() => setEditBlogVisible(false)}
        onSubmit={(item) => console.log(item)}
      />
    </View>
  );
};
