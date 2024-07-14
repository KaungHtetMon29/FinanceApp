import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ReactElement } from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
export default function ProfileSettingButton({
  pageName,
  icon,
  instruction,
  txtColor = "black",
  navigation,
  onPress = () => navigation.navigate(pageName.toUpperCase()),
}: {
  txtColor?: string;
  pageName: string;
  instruction?: string;
  icon: ReactElement;
  navigation: NavigationProp<ParamListBase>;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <HStack space={7} alignItems={"center"}>
          {icon}
          <VStack>
            <Text fontSize={17} fontWeight={"bold"} color={txtColor}>
              {pageName}
            </Text>
            {instruction && (
              <Text fontSize={13} fontWeight={"normal"} opacity={0.6}>
                {instruction}
              </Text>
            )}
          </VStack>
        </HStack>
        <MaterialIcons name="keyboard-arrow-right" size={32} color="black" />
      </HStack>
    </Pressable>
  );
}
