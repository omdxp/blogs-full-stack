import { FC } from "react";
import { Text, View } from "react-native";
import { BlogDetailsStyles } from "./styles";

interface BlogDetailsScreenProps {}

export const BlogDetailsScreen: FC<BlogDetailsScreenProps> = ({}) => {
  return (
    <View>
      <Text>BlogDetails screen created!</Text>
    </View>
  );
};
