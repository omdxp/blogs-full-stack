import { Button, Text, View } from "react-native";
import { FC, useState } from "react";

import { AddAuthor } from "components/author/add-author";
import { Author } from "models";
import { AuthorsList } from "components/author/authors-list";
import { AuthorsStyles } from "./styles";
import { EditAuthor } from "components/author/edit-author";
import { globalStyles } from "styles";
import { testAuthors } from "test-data/authors";

interface AuthorsScreenProps {}

export const AuthorsScreen: FC<AuthorsScreenProps> = ({}) => {
  const [addAuthorVisible, setAddAuthorVisible] = useState(false);
  const [editAuthorVisible, setEditAuthorVisible] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  return (
    <View style={globalStyles.container}>
      <Button title="Add Author" onPress={() => setAddAuthorVisible(true)} />
      <AddAuthor
        visible={addAuthorVisible}
        onAddAuthor={(item) => console.log(item)}
        onClose={() => setAddAuthorVisible(false)}
      />
      <AuthorsList
        authors={testAuthors}
        onItemPress={(item) => {
          setSelectedAuthor(item);
          setEditAuthorVisible(true);
        }}
      />
      <EditAuthor
        visible={editAuthorVisible}
        author={selectedAuthor!}
        onClose={() => {
          setEditAuthorVisible(false);
          setSelectedAuthor(null);
        }}
        onDelete={(id) => console.log(id)}
        onSubmit={(name) => console.log(name)}
      />
    </View>
  );
};
