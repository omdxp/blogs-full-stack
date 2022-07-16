import {
  Button,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FC, useCallback, useEffect, useState } from "react";

import { Blog } from "models";
import { EditBlogStyles } from "./styles";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import { colors } from "styles/colors";
import { globalStyles } from "styles";
import { testAuthors } from "test-data/authors";

interface EditBlogProps {
  blog: Blog;
  visible: boolean;
  onClose: () => void;
  onSubmit: (blog: Omit<Blog, "id" | "comments">) => void;
}

export const EditBlog: FC<EditBlogProps> = ({
  blog,
  visible,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState(testAuthors[0].id);
  const onSubmitHandler = useCallback(() => {
    if (title.length > 0 && body.length > 0) {
      onSubmit({
        title,
        body,
        author,
      });
      onClose();
    } else {
      alert("Please fill all fields");
    }
  }, [title, body, author, onClose, onSubmit]);
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setBody(blog.body);
      setAuthor(blog.author);
    }
  }, [blog]);
  return (
    <Modal
      presentationStyle="overFullScreen"
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <ScrollView contentContainerStyle={EditBlogStyles.centeredView}>
        <View style={EditBlogStyles.modalView}>
          <View style={EditBlogStyles.row}>
            <Text style={EditBlogStyles.text}>Edit a Blog</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesomeIcon name="remove" size={25} color={colors.red} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={globalStyles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Body"
            multiline
            value={body}
            onChangeText={setBody}
          />
          <Picker
            style={globalStyles.input}
            selectedValue={author}
            onValueChange={setAuthor}
            numberOfLines={1}
          >
            {testAuthors.map((author) => (
              <Picker.Item
                key={author.id}
                label={author.name}
                value={author.id}
              />
            ))}
          </Picker>
          <Button title="Add" onPress={onSubmitHandler} />
        </View>
      </ScrollView>
    </Modal>
  );
};
