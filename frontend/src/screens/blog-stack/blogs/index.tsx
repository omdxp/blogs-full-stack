import { ActivityIndicator, Button, Text, View } from "react-native";
import { FC, useState } from "react";

import { AddBlog } from "components/blog/add-blog";
import { Blog } from "models";
import { BlogsList } from "components/blog/blogs-list";
import { BlogsStyles } from "./styles";
import { EditBlog } from "components/blog/edit-blog";
import { globalStyles } from "styles";
import { selectAllBlogs } from "store/blogs/selectors/blogs";
import { testBlogs } from "test-data/blogs";
import { useGetBlogsQuery } from "store/blogs/endpoints";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

interface BlogsScreenProps {}

export const BlogsScreen: FC<BlogsScreenProps> = ({}) => {
  const navigation = useNavigation<any>();
  const [addBlogVisible, setAddBlogVisible] = useState(false);
  const [editBlogVisible, setEditBlogVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const blogs = useSelector(selectAllBlogs);
  const { isLoading, isSuccess, isError, error } = useGetBlogsQuery(null);
  return (
    <View style={globalStyles.container}>
      <Button title="Add a Blog" onPress={() => setAddBlogVisible(true)} />
      <AddBlog
        visible={addBlogVisible}
        onClose={() => setAddBlogVisible(false)}
        onSubmit={(item) => console.log(item)}
      />
      {isLoading && <ActivityIndicator />}
      {isSuccess && (
        <BlogsList
          blogs={blogs}
          onItemPress={(item) =>
            navigation.navigate("blog-details", { blog: item })
          }
          onItemLongPress={(item) => {
            setSelectedBlog(item);
            setEditBlogVisible(true);
          }}
        />
      )}
      {isError && (
        <Text style={globalStyles.errorText}>Something went wrong</Text>
      )}
      <EditBlog
        blog={selectedBlog!}
        visible={editBlogVisible}
        onClose={() => {
          setEditBlogVisible(false);
          setSelectedBlog(null);
        }}
        onSubmit={(item) => console.log(item)}
        onDelete={(id) => console.log(id)}
      />
    </View>
  );
};
