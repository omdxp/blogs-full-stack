import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { formatDistanceToNow, parseISO } from "date-fns";

import { Author } from "models";
import { AuthorsListStyles } from "./styles";
import { FC } from "react";

interface AuthorsListProps {
  authors: Author[];
  onItemPress: (item: Author) => void;
}

export const AuthorsList: FC<AuthorsListProps> = ({ authors, onItemPress }) => {
  return (
    <FlatList
      data={authors}
      keyExtractor={(author) => `${author.id}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onItemPress(item)}
          style={AuthorsListStyles.item}
        >
          <View>
            <Text style={AuthorsListStyles.author}>{item.name}</Text>
            <Text style={AuthorsListStyles.description}>
              N° of blogs {item.blogs.length}
            </Text>
          </View>
          <View>
            <Text style={AuthorsListStyles.description}>
              {formatDistanceToNow(parseISO(item.updatedAt))} ago
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
