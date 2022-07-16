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

import { Comment } from "models";
import { EditCommentStyles } from "./styles";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { colors } from "styles/colors";
import { globalStyles } from "styles";

interface EditCommentProps {
  comment: Comment;
  visible: boolean;
  onClose: () => void;
  onSubmit: (comment: Omit<Comment, "id" | "author" | "blog">) => void;
}

export const EditComment: FC<EditCommentProps> = ({
  comment,
  visible,
  onClose,
  onSubmit,
}) => {
  const [body, setBody] = useState("");
  const onSubmitHandler = useCallback(() => {
    if (body.length > 0) {
      onSubmit({
        body,
      });
      onClose();
    } else {
      alert("Please fill all fields");
    }
  }, [body, onClose, onSubmit]);
  useEffect(() => {
    if (comment) {
      setBody(comment.body);
    }
  }, [comment]);

  return (
    <Modal
      presentationStyle="overFullScreen"
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <ScrollView contentContainerStyle={EditCommentStyles.centeredView}>
        <View style={EditCommentStyles.modalView}>
          <View style={EditCommentStyles.row}>
            <Text style={EditCommentStyles.text}>Edit a Comment</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesomeIcon name="remove" size={25} color={colors.red} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={globalStyles.input}
            placeholder="Body"
            multiline
            value={body}
            onChangeText={setBody}
          />
          <Button title="Submit" onPress={onSubmitHandler} />
        </View>
      </ScrollView>
    </Modal>
  );
};
