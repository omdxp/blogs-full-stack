import { AuthorsScreen } from "./authors";
import { Navigation as BlogStack } from "./blog-stack/navigation";
import { FC } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const { Navigator, Screen } = createMaterialTopTabNavigator();

interface Route {
  name: string;
  component: FC;
}

const routes: Route[] = [
  {
    name: "authors",
    component: AuthorsScreen,
  },
  {
    name: "blog-stack",
    component: BlogStack,
  },
];

export const Navigation: FC = () => {
  return (
    <Navigator initialRouteName="blog-stack">
      {routes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
