import { Box, Flex, Image, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
export default function Profile({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const dimension = useWindowDimensions();
  const [show, setshow] = useState(false);
  setTimeout(() => {
    setshow(true);
  }, 3000);
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
        <Pressable onPress={() => navigation.navigate("Profile Setting")}>
          {show ? (
            <Image
              borderRadius={"full"}
              source={{
                uri: "https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg",
              }}
              alt="profile"
              size={50}
            />
          ) : (
            <Box
              width={50}
              height={50}
              bg={"gray.300"}
              borderRadius={"full"}
            ></Box>
          )}

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
