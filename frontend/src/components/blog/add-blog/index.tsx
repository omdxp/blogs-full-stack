import { FC } from "react";
import { Text, View } from "react-native"
import { AddBlogStyles } from "./styles";

interface AddBlogProps {}

export const AddBlog: FC<AddBlogProps> = ({}) => {
  return (
    <View>
      <Text>AddBlog component created!</Text>
    </View>
  );
};
