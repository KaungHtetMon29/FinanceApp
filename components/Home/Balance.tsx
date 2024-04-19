import { Box, Button, HStack, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, useWindowDimensions } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { PageTypes } from "../../navigation/Pagetypes";
export default function Balance({
  navigation,
  setModalVisible,
}: {
  navigation: NavigationProp<Record<PageTypes, undefined>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dimension = useWindowDimensions();

  return (
    <Box
      backgroundColor={"rgba(0,122,255,0.6)"}
      padding={dimension.width > 450 ? 10 : 5}
      borderRadius={"3xl"}
    >
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <VStack>
          <Text fontSize={dimension.fontScale * 15} color={"white"}>
            My Balance
          </Text>
          <Text
            fontSize={
              dimension.width > 360 ? (dimension.width > 400 ? 30 : 25) : 20
            }
            color={"white"}
            fontWeight={"bold"}
          >
            10,000,000 Ks
          </Text>
          <Text fontSize={dimension.fontScale * 12} color={"white"}>
            Updated Date: 12/12/2024
          </Text>
        </VStack>
        <HStack space={10}>
          <Pressable onPress={() => setModalVisible(true)}>
            <FontAwesome
              name="plus"
              size={dimension.fontScale * 30}
              color="white"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("BalanceInput")}>
            <FontAwesome5
              name="history"
              size={dimension.fontScale * 30}
              color="white"
            />
          </Pressable>
        </HStack>
      </HStack>
    </Box>
  );
}
