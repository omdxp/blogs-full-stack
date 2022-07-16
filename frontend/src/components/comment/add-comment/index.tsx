import { FC, useCallback, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import { AddCommentStyles } from "./styles";
import { Comment } from "models";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { colors } from "styles/colors";
import { globalStyles } from "styles";

interface AddCommentProps {
  onSubmit: (comment: Omit<Comment, "id" | "blog" | "author">) => void;
}

export const AddComment: FC<AddCommentProps> = ({ onSubmit }) => {
  const [body, setBody] = useState("");
  const onSubmitHandler = useCallback(() => {
    if (body.length > 0) {
      onSubmit({
        body,
      });
    } else {
      alert("Please fill all fields");
    }
  }, [body, onSubmit]);
  return (
    <View style={AddCommentStyles.container}>
      <TextInput
        style={[
          globalStyles.input,
          {
            width: "80%",
          },
        ]}
        multiline
        maxLength={50}
        placeholder="Add a comment"
        value={body}
        onChangeText={setBody}
      />
      <TouchableOpacity
        style={[
          AddCommentStyles.button,
          {
            backgroundColor: body.length === 0 ? colors.gray : colors.blueLight,
          },
        ]}
        onPress={onSubmitHandler}
        disabled={body.length === 0}
      >
        <FontAwesomeIcon
          name="comment"
          size={25}
          color={body.length === 0 ? colors.grayDark : colors.blue}
        />
      </TouchableOpacity>
    </View>
  );
};
