import { Blog, Comment } from "models";
import { Button, ScrollView, Text, View } from "react-native";
import { FC, useState } from "react";

import { AddComment } from "components/comment/add-comment";
import { BlogDetailsStyles } from "./styles";
import { CommentsList } from "components/comment/comments-list";
import { EditComment } from "components/comment/edit-comment";
import { globalStyles } from "styles";
import { testAuthors } from "test-data/authors";
import { testComments } from "test-data/comments";
import { useNavigation } from "@react-navigation/native";

interface BlogDetailsScreenProps {
  route: {
    params: {
      blog: Blog;
    };
  };
}

export const BlogDetailsScreen: FC<BlogDetailsScreenProps> = ({ route }) => {
  const navigation = useNavigation<any>();
  const { blog } = route.params;
  const [editCommentVisible, setEditCommentVisible] = useState(false);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  return (
    <View style={[globalStyles.container, { alignItems: "flex-start" }]}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <ScrollView>
        <Text style={globalStyles.titleText}>{blog.title}</Text>
        <Text style={globalStyles.paragraph}>{blog.body}</Text>
        <Text style={globalStyles.paragraph}>
          By {testAuthors[blog.author].name}
        </Text>
      </ScrollView>
      <CommentsList
        comments={testComments}
        onItemPress={(item) => {
          setSelectedComment(item);
          setEditCommentVisible(true);
        }}
      />
      <EditComment
        visible={editCommentVisible}
        comment={selectedComment!}
        onClose={() => setEditCommentVisible(false)}
        onSubmit={(item) => console.log(item)}
      />
    </View>
  );
};
