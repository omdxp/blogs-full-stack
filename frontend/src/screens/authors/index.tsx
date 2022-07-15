import { Text, View } from "react-native";

import { AddAuthor } from "components/author/add-author";
import { AuthorsList } from "components/author/authors-list";
import { AuthorsStyles } from "./styles";
import { EditAuthor } from "components/author/edit-author";
import { FC } from "react";
import { globalStyles } from "styles";

interface AuthorsScreenProps {}

export const AuthorsScreen: FC<AuthorsScreenProps> = ({}) => {
  return (
    <View style={globalStyles.container}>
      <AddAuthor />
      <AuthorsList />
      <EditAuthor />
    </View>
  );
};
