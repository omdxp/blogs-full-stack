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

import { AddAuthorStyles } from "./styles";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { colors } from "styles/colors";
import { globalStyles } from "styles";

interface AddAuthorProps {
  visible: boolean;
  onAddAuthor: (name: string) => void;
  onClose: () => void;
}

export const AddAuthor: FC<AddAuthorProps> = ({
  visible,
  onAddAuthor,
  onClose,
}) => {
  const [name, setName] = useState("");
  const onSubmitHandler = useCallback(() => {
    if (name.length > 0 && /^[a-zA-Z]+$/.test(name)) {
      onAddAuthor(name);
      setName("");
      onClose();
    } else {
      alert("Name must contain only letters");
    }
  }, [name, setName, onClose, onAddAuthor]);
  return (
    <Modal
      presentationStyle="overFullScreen"
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <ScrollView contentContainerStyle={AddAuthorStyles.centeredView}>
        <View style={AddAuthorStyles.modalView}>
          <View style={AddAuthorStyles.row}>
            <Text style={AddAuthorStyles.text}>Add Author</Text>
            <TouchableOpacity
              onPress={() => {
                setName("");
                onClose();
              }}
            >
              <FontAwesomeIcon name="remove" size={25} color={colors.red} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={globalStyles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <Button title="Add" onPress={onSubmitHandler} />
        </View>
      </ScrollView>
    </Modal>
  );
};
