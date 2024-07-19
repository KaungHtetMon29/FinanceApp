import {
  Box,
  HStack,
  Image,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import ProfileSettingContainer from "../components/ProfileSetting/ProfileSettingContainer";
import { Pressable, useWindowDimensions } from "react-native";
import ProfileSettingButton from "../components/ProfileSetting/ProfileSettingButton";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ChangePw from "../components/EditProfile/ChangePw";
import { useState } from "react";

export default function ProfileSetting({ navigation }) {
  const { width, height } = useWindowDimensions();
  const [changPw, setChangePw] = useState(false);
  return (
    <ScrollView
      backgroundColor={"gray.200"}
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: height / 50,
      }}
    >
      <ChangePw isOpen={changPw} onClose={() => setChangePw(false)} />
      <VStack justifyContent="space-between" h="full">
        <ProfileSettingContainer>
          <HStack alignItems={"center"}>
            <Image
              borderRadius={"full"}
              source={{
                uri: "https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg",
              }}
              alt="profile"
              size={60}
            />
            <VStack space={0.4} paddingX={4} justifyContent={"center"}>
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Kaung Htet Mon
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                kaunghtetmon456@gmail.com
              </Text>
            </VStack>
          </HStack>
        </ProfileSettingContainer>
        <ProfileSettingContainer>
          <VStack
            space={width > 360 ? (width > 390 ? (width > 412 ? 8 : 7) : 5) : 4}
          >
            <Text
              fontSize={"lg"}
              fontWeight={"bold"}
              paddingBottom={
                width > 360 ? (width > 390 ? (width > 412 ? 3 : 1) : 0.7) : 0.5
              }
              opacity={0.7}
            >
              General
            </Text>
            <ProfileSettingButton
              navigation={navigation}
              instruction="Change Profile Picture, Name and Email"
              pageName={"Edit Profile"}
              icon={
                <AntDesign name="profile" size={30} color="rgba(0,122,255,1)" />
              }
            />
            <ProfileSettingButton
              onPress={() => setChangePw((prev) => !prev)}
              navigation={navigation}
              pageName={"Change Password"}
              instruction="Update and Strengthen account security"
              icon={
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={30}
                  color="rgba(0,122,255,1)"
                />
              }
            />
            <ProfileSettingButton
              navigation={navigation}
              pageName={"Terms of Use"}
              instruction="Protect your account now"
              icon={
                <MaterialCommunityIcons
                  name="shield-outline"
                  size={30}
                  color="rgba(0,122,255,1)"
                />
              }
            />
          </VStack>
        </ProfileSettingContainer>
        <ProfileSettingContainer>
          <VStack
            space={width > 360 ? (width > 390 ? (width > 412 ? 8 : 7) : 5) : 4}
          >
            <Text
              fontSize={"lg"}
              fontWeight={"bold"}
              paddingBottom={
                width > 360 ? (width > 390 ? (width > 412 ? 3 : 1) : 0.7) : 0.5
              }
              opacity={0.7}
            >
              Preferences
            </Text>
            <ProfileSettingButton
              navigation={navigation}
              instruction="Change Profile Picture, Name and Email"
              pageName={"Notification"}
              icon={
                <MaterialCommunityIcons
                  name="bell-badge-outline"
                  size={30}
                  color="rgba(0,122,255,1)"
                />
              }
            />
            <ProfileSettingButton
              navigation={navigation}
              pageName={"FAQ"}
              instruction="Update and Strengthen account security"
              icon={
                <AntDesign
                  name="exclamationcircleo"
                  size={30}
                  color="rgba(0,122,255,1)"
                />
              }
            />
            <ProfileSettingButton
              name="Log Out"
              navigation={navigation}
              pageName={"Login"}
              txtColor="red"
              instruction="Protect your account now"
              icon={<AntDesign name="logout" size={30} color="red" />}
            />
          </VStack>
        </ProfileSettingContainer>
      </VStack>
    </ScrollView>
  );
}
