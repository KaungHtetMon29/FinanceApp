import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Home2 from "../screens/Test";

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Home2}
        options={{
          headerShown: false,
        }}

        // options={{ headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}
