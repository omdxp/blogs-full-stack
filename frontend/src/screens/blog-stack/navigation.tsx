import { BlogDetailsScreen } from "./blog-details";
import { BlogsScreen } from "./blogs";
import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

interface Route {
  name: string;
  component: FC<any>;
}

const routes: Route[] = [
  {
    name: "blog-details",
    component: BlogDetailsScreen,
  },
  {
    name: "blogs",
    component: BlogsScreen,
  },
];

export const Navigation: FC = () => {
  return (
    <Navigator initialRouteName="blogs" screenOptions={{ headerShown: false }}>
      {routes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
