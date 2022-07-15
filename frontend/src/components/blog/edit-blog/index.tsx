import { FC } from "react";
import { Text, View } from "react-native"
import { EditBlogStyles } from "./styles";

interface EditBlogProps {}

export const EditBlog: FC<EditBlogProps> = ({}) => {
  return (
    <View>
      <Text>EditBlog component created!</Text>
    </View>
  );
};
