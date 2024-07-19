import { Text, View } from "native-base";
import { lazy, Suspense } from "react";

export default function ProfileSettingPage({ navigation }) {
  const ProfileSettingLazy = lazy(() => import("./ProfileSetting"));
  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading</Text>
        </View>
      }
    >
      <ProfileSettingLazy navigation={navigation} />
    </Suspense>
  );
}
