import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Home2 from "../screens/Test";
import UsageHistory from "../screens/UsageHistory";
import BalanceInputHistory from "../screens/BalanceInputHistory";
import Login from "../screens/Login";
import ProfileSetting from "../screens/ProfileSetting";
import EditProfile from "../screens/EditProfile";
import NotificationSetting from "../screens/NotificationSetting";
import TermOfUse from "../screens/TermOfUse";
import ProfileSettingPage from "../screens/ProfileSettingPage";

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: { color: "rgba(0,122,255,1)" },
        headerTintColor: "rgba(0,122,255,1)",
      }}
    >
      <Stack.Screen
        name="LOGIN"
        component={Login}
        options={{ headerShown: false }}
        // options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
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
      <Stack.Screen name="BalanceInput" component={BalanceInputHistory} />
      <Stack.Screen name="Profile Setting" component={ProfileSettingPage} />
      <Stack.Screen name="EDIT PROFILE" component={EditProfile} />
      <Stack.Screen name="NOTIFICATION" component={NotificationSetting} />
      <Stack.Screen name="TERMS OF USE" component={TermOfUse} />
      <Stack.Screen name="FAQ" component={TermOfUse} />
    </Stack.Navigator>
  );
}
