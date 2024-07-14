import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Box, HStack, Text, VStack } from "native-base";
import { Pressable, useWindowDimensions } from "react-native";
import Usage from "../Usage";
import { useState } from "react";

export default function RecentUsage({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const dimension = useWindowDimensions();
  const [show, setshow] = useState(false);
  setTimeout(() => {
    setshow(true);
  }, 1000);
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
        <Pressable onPressIn={() => navigation.navigate("UsageHistory")}>
          <Text fontSize={dimension.fontScale * 16.5} color={"blue.600"}>
            see all
          </Text>
        </Pressable>
      </HStack>
      <VStack space={(dimension.height / 100) * 2.3} height={"40"}>
        {show ? (
          <>
            <Usage mode="show" type="Food" />
            <Usage mode="show" type="Clothing" />
            <Usage mode="show" type="Transport" />
          </>
        ) : (
          <Text>Loading</Text>
        )}
    </Box>
  );
}
