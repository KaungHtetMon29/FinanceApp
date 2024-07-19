import {
  Box,
  Button,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  VStack,
} from "native-base";
import Container from "../components/container";
import { Platform, Pressable } from "react-native";
import ProfileInputs from "../components/ProfileSetting/ProfileInputs";
import { lazy, Suspense, useState } from "react";
import ProfileImage from "../components/EditProfile/ProfileImage";

export default function EditProfile() {
  const LazyEditProfile = lazy(
    () => import("../components/EditProfile/EditProfile")
  );
  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading</Text>
        </View>
      }
    >
      <LazyEditProfile />
    </Suspense>
  );
}
