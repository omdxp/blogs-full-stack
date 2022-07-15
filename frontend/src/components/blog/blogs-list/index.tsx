import { FC } from "react";
import { Text, View } from "react-native"
import { BlogsListStyles } from "./styles";

interface BlogsListProps {}

export const BlogsList: FC<BlogsListProps> = ({}) => {
  return (
    <View>
      <Text>BlogsList component created!</Text>
    </View>
  );
};
