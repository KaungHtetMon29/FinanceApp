import navigation from "@react-navigation/native";
import {
  Button,
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import { Platform, useWindowDimensions } from "react-native";
import Container from "../components/container";
import { AntDesign } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const dimension = useWindowDimensions();

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container>
        <VStack flex={1} space={10}>
          <VStack flex={0.7} justifyContent={"flex-end"} space={2}>
            <Text
              color={"rgba(0,122,255,1)"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              textAlign={"center"}
              display={"flex"}
            >
              FinanceFlow
            </Text>
            <Text
              fontSize={"lg"}
              lineHeight={25}
              fontWeight={"medium"}
              textAlign={"center"}
              color={"rgba(0,122,255,.6)"}
            >
              Seamlessly Manage Your Finances and Unlock Your Financial
              Potential
            </Text>
          </VStack>
          <VStack flex={0.3} space={3}>
            <HStack alignSelf={"center"} alignItems={"center"} space={2}>
              <AntDesign name="google" size={24} color={"rgba(0,122,255,1)"} />
              <Text
                textAlign={"center"}
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={"rgba(0,122,255,1)"}
              >
                Google
              </Text>
            </HStack>
            <VStack space={15}>
              <Button
                background={"rgba(0,122,255,1)"}
                borderRadius={"full"}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text fontSize={"xl"} fontWeight={"bold"} color={"white"}>
                  LOGIN
                </Text>
              </Button>
              <Button
                background={"rgba(0,122,255,1)"}
                borderRadius={"full"}
                onPress={navigation.navigate("Home")}
              >
                <Text fontSize={"xl"} fontWeight={"bold"} color={"white"}>
                  SIGN UP
                </Text>
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </KeyboardAvoidingView>
  );
}
