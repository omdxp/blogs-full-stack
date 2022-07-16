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

import { Author } from "models";
import { EditAuthorStyles } from "./styles";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { colors } from "styles/colors";
import { globalStyles } from "styles";

interface EditAuthorProps {
  visible: boolean;
  author: Author;
  onClose: () => void;
  onSubmit: (name: string) => void;
  onDelete: (id: number) => void;
}

export const EditAuthor: FC<EditAuthorProps> = ({
  visible,
  author,
  onClose,
  onSubmit,
  onDelete,
}) => {
  const [name, setName] = useState("");
  const onSubmitHandler = useCallback(() => {
    if (name.length > 0 && /^[a-zA-Z]+$/.test(name)) {
      onSubmit(name);
      setName("");
      onClose();
    } else {
      alert("Name must contain only letters");
    }
  }, [name, setName, onClose, onSubmit]);
  const onDeleteHandler = useCallback(() => {
    onDelete(author.id);
    onClose();
  }, [author, onClose, onDelete]);
  useEffect(() => {
    if (author) {
      setName(author.name);
    }
  }, [author]);
  return (
    <Modal
      presentationStyle="overFullScreen"
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <ScrollView contentContainerStyle={EditAuthorStyles.centeredView}>
        <View style={EditAuthorStyles.modalView}>
          <View style={EditAuthorStyles.row}>
            <Text style={EditAuthorStyles.text}>Edit Author</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesomeIcon name="remove" size={25} color={colors.red} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={globalStyles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <View style={EditAuthorStyles.row}>
            <Button title="Submit" onPress={onSubmitHandler} />
            <Button title="Delete" onPress={onDeleteHandler} color="red" />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
