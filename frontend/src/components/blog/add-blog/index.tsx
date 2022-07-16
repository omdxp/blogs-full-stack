import {
  Button,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FC, useCallback, useState } from "react";

import { AddBlogStyles } from "./styles";
import { Blog } from "models";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import { colors } from "styles/colors";
import { globalStyles } from "styles";
import { testAuthors } from "test-data/authors";

interface AddBlogProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (blog: Omit<Blog, "id" | "comments">) => void;
}

export const AddBlog: FC<AddBlogProps> = ({ visible, onClose, onSubmit }) => {
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
  return (
    <Modal
      presentationStyle="overFullScreen"
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <ScrollView contentContainerStyle={AddBlogStyles.centeredView}>
        <View style={AddBlogStyles.modalView}>
          <View style={AddBlogStyles.row}>
            <Text style={AddBlogStyles.text}>Add a Blog</Text>
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
