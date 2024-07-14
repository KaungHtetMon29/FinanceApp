import {
  HStack,
  KeyboardAvoidingView,
  Switch,
  Text,
  View,
  VStack,
} from "native-base";
import Container from "../components/container";
import { useState } from "react";
import NotiSetting from "../components/NotiSetting/NotiSetting";

export default function NotificationSetting() {
  const [enabled, setenabled] = useState(false);
  return (
    <KeyboardAvoidingView flex={1}>
      <Container bg={"gray.200"}>
        <VStack space={5}>
          <NotiSetting
            name="Push Notification"
            description="Allow Push Notification"
          />
          <NotiSetting
            name="Email Notification"
            description="Allow Email Notification"
          />
          {/* <NotiSetting
            name="Push Notification"
            description="Allow Push Notification"
          /> */}
        </VStack>
      </Container>
    </KeyboardAvoidingView>
  );
}
