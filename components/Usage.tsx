import { Box, Flex, HStack, Text, VStack } from "native-base";
import { Pressable, View, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
function Usage({ mode = "show", setusagemodalvisible, type }: UsageProps) {
  const dimension = useWindowDimensions();
  const Icon = () => {
    switch (type) {
      case "Clothing":
        return <FontAwesome5 name="tshirt" size={24} color="black" />;

      case "Food":
        return <FontAwesome6 name="bowl-food" size={24} color="black" />;

      case "Healthcare":
        return <FontAwesome name="heart" size={24} color="black" />;

      case "Housing":
        return <FontAwesome name="building" size={24} color="black" />;

      case "Transport":
        return <FontAwesome name="bus" size={26} color="black" />;
    }
  };
  return (
    <Flex
      width={"full"}
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <HStack space={5} alignItems={"center"}>
        <Box alignItems={"center"} w={8}>
          <Icon />
        </Box>

        <Flex flexDir={"column"}>
          <Text fontSize={dimension.fontScale * 17}>Food</Text>
          <Text fontSize={dimension.fontScale * 15} color={"gray.500"}>
            date
          </Text>
        </Flex>
      </HStack>

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
      type: categorytypes;
    }
  | {
      mode: "edit";
      setusagemodalvisible: React.Dispatch<React.SetStateAction<boolean>>;
      type: categorytypes;
    };
type categorytypes =
  | "Food"
  | "Housing"
  | "Clothing"
  | "Healthcare"
  | "Transport";
