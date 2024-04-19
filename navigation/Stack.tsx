import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Home2 from "../screens/Test";
import UsageHistory from "../screens/UsageHistory";
import BalanceInputHistory from "../screens/BalanceInputHistory";

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="UsageHistory"
        component={UsageHistory}
        // options={{
        //   transitionSpec: {
        //     open: {
        //       animation: "spring",
        //       config: {
        //         mass: 0.1,
        //         stiffness: 500,
        //         damping: 100,
        //       },
        //     },
        //     close: { animation: "timing", config: { duration: 0.1 } },
        //   },
        // }}
      />
      <Stack.Screen
        name="BalanceInput"
        component={BalanceInputHistory}

        // options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Profile"
        component={Home2}

        // options={{ headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}
