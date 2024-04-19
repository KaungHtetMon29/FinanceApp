import { Box, Flex, Image, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, useWindowDimensions } from "react-native";
import React from "react";
export default function Profile({
  setProfileModal,
}: {
  setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dimension = useWindowDimensions();
  return (
    <Box>
      <Flex
        direction="row"
        justifyContent={"space-between"}
        style={{ alignItems: "flex-end" }}
      >
        <VStack space={(dimension.height / 100) * 0.5}>
          <Text fontSize={dimension.fontScale * 16}>Hello, name</Text>
          <Text fontSize={dimension.scale * 8} fontWeight={"semibold"}>
            Home
          </Text>
        </VStack>
        <Pressable onPress={() => setProfileModal(true)}>
          <Image
            borderRadius={"full"}
            source={{
              uri: "https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg",
            }}
            alt="profile"
            size={50}
          />
          {/* <AntDesign
            name="pausecircle"
            size={dimension.scale * 24}
            color="black"
          /> */}
        </Pressable>
      </Flex>
    </Box>
  );
}
