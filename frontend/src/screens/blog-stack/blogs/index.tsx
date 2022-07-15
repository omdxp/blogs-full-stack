import { FC } from "react";
import { Text, View } from "react-native";
import { BlogsStyles } from "./styles";

interface BlogsScreenProps {}

export const BlogsScreen: FC<BlogsScreenProps> = ({}) => {
  return (
    <View>
      <Text>Blogs screen created!</Text>
    </View>
  );
};
