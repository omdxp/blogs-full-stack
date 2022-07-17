import { AuthorsScreen } from "./authors";
import { Navigation as BlogStack } from "./blog-stack/navigation";
import { FC } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const { Navigator, Screen } = createMaterialTopTabNavigator();

interface Route {
  name: string;
  title: string;
  component: FC;
}

const routes: Route[] = [
  {
    name: "blog-stack",
    title: "Blogs",
    component: BlogStack,
  },
  {
    name: "authors",
    title: "Authors",
    component: AuthorsScreen,
  },
];

export const Navigation: FC = () => {
  return (
    <Navigator initialRouteName="blog-stack">
      {routes.map(({ name, title, component }) => (
        <Screen
          key={name}
          name={name}
          component={component}
          options={{
            title,
          }}
        />
      ))}
    </Navigator>
  );
};
