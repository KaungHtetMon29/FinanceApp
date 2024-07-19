import {
  Box,
  Button,
  Image,
  KeyboardAvoidingView,
  Text,
  VStack,
} from "native-base";

import { Platform, Pressable } from "react-native";

import { useState } from "react";
import Container from "../container";
import ProfileImage from "./ProfileImage";
import ProfileInputs from "../ProfileSetting/ProfileInputs";

export default function EditProfilePage() {
  return (
    <KeyboardAvoidingView flex={1}>
      <Container bg={"gray.200"}>
        <VStack
          justifyContent={"center"}
          alignItems={"center"}
          space={26}
          paddingTop={3}
        >
          <ProfileImage />
          <VStack width={"full"} space={6}>
            <ProfileInputs Lablename={"Name"} />
            <ProfileInputs Lablename={"Email"} />
            <ProfileInputs Lablename={"Date of Birth"} />
          </VStack>

          <Pressable>
            <Button
              shadow={2}
              rounded={"xl"}
              backgroundColor={"rgba(0,122,255,1)"}
            >
              <Text fontSize={16} color={"white"} paddingX={20}>
                Save
              </Text>
            </Button>
          </Pressable>
        </VStack>
      </Container>
    </KeyboardAvoidingView>
  );
}
