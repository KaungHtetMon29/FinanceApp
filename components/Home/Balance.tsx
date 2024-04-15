import { Box, Button, HStack, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, useWindowDimensions } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
export default function Balance({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const dimension = useWindowDimensions();
  return (
    <Box
      backgroundColor={"rgba(0,122,255,0.6)"}
      padding={dimension.width > 450 ? 10 : 5}
      borderRadius={"3xl"}
    >
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text fontSize={dimension.fontScale * 15} color={"white"}>
            My Balance
          </Text>
          <Text
            fontSize={dimension.fontScale * 30}
            color={"white"}
            fontWeight={"bold"}
          >
            $10,000
          </Text>
        </Box>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <AntDesign
            name="plus"
            size={dimension.fontScale * 30}
            color="white"
          />
        </Pressable>
      </HStack>
    </Box>
  );
}
