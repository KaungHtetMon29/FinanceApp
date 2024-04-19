import { Box, Flex, HStack, Text, VStack } from "native-base";
import { Pressable, View, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
function Usage({ mode = "show", setusagemodalvisible }: UsageProps) {
  const dimension = useWindowDimensions();
  return (
    <Flex
      width={"full"}
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex flexDir={"column"}>
        <Text fontSize={dimension.fontScale * 17}>Food</Text>
        <Text fontSize={dimension.fontScale * 15} color={"gray.500"}>
          date
        </Text>
      </Flex>
      <HStack space={5} alignItems={"center"}>
        <Text fontSize={dimension.fontScale * 17}>-$1000</Text>
        {mode === "edit" && (
          <Pressable onPress={() => setusagemodalvisible(true)}>
            <Box bg={"blue.500"} padding={2} borderRadius={"lg"}>
              <AntDesign name="edit" size={20} color="white" />
            </Box>
          </Pressable>
        )}
      </HStack>
    </Flex>
  );
}
export default React.memo(Usage);
type UsageProps =
  | {
      mode: "show";
      setusagemodalvisible?: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | {
      mode: "edit";
      setusagemodalvisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
