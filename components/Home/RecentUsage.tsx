import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Box, HStack, Text, VStack } from "native-base";
import { Pressable, useWindowDimensions } from "react-native";

export default function RecentUsage({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const dimension = useWindowDimensions();
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={2}
      >
        <Text fontSize={dimension.fontScale * 20} fontWeight={"semibold"}>
          Recent Usage
        </Text>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Text fontSize={dimension.fontScale * 16.5} color={"blue.600"}>
            see all
          </Text>
        </Pressable>
      </HStack>
      <VStack space={(dimension.height / 100) * 2.3}>
        <Box>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <VStack>
              <Text fontSize={dimension.fontScale * 17}>Food</Text>
              <Text fontSize={dimension.fontScale * 15} color={"gray.500"}>
                date
              </Text>
            </VStack>
            <Text fontSize={dimension.fontScale * 17}>-$1000</Text>
          </HStack>
        </Box>
        <Box>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <VStack>
              <Text fontSize={dimension.fontScale * 17}>Food</Text>
              <Text fontSize={dimension.fontScale * 15} color={"gray.500"}>
                date
              </Text>
            </VStack>
            <Text fontSize={dimension.fontScale * 17}>-$1000</Text>
          </HStack>
        </Box>
        <Box>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <VStack>
              <Text fontSize={dimension.fontScale * 17}>Food</Text>
              <Text fontSize={dimension.fontScale * 15} color={"gray.500"}>
                date
              </Text>
            </VStack>
            <Text fontSize={dimension.fontScale * 17}>-$1000</Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}
