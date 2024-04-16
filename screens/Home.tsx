import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  KeyboardAvoidingView,
  MoonIcon,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { Platform, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Balance from "../components/Home/Balance";
import UsageGraph from "../components/Home/UsageGraph";
import RecentUsage from "../components/Home/RecentUsage";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import BalanceInput from "../components/Home/modal/Balanceinput";
import { useRef, useState } from "react";

function Home({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
  const dimension = useWindowDimensions();
  const [ModalVisible, setModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        paddingTop={dimension.width > 450 ? 10 : 5}
        paddingX={dimension.width > 450 ? 10 : 5}
        bg={"white"}
      >
        <BalanceInput
          inputprops={{ ModalVisible, setModalVisible, initialRef, finalRef }}
        />

        <VStack flexGrow={0.7} space={(dimension.height / 100) * 2}>
          <VStack space={(dimension.height / 100) * 1}>
            <Box>
              <Text fontSize={dimension.fontScale * 16}>Hello, name</Text>
            </Box>
            <Box>
              <Flex
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text fontSize={dimension.scale * 8} fontWeight={"semibold"}>
                  Home
                </Text>
                <AntDesign
                  name="pausecircle"
                  size={dimension.scale * 8}
                  color="black"
                />
              </Flex>
            </Box>
          </VStack>
          <Balance
            navigation={navigation}
            ModalVisible={ModalVisible}
            setModalVisible={setModalVisible}
          />
          <UsageGraph />
          <RecentUsage navigation={navigation} />
        </VStack>
        <Button
          onPress={() => navigation.navigate("Profile")}
          marginX={"auto"}
          width={"100%"}
          bg="blue.500"
          _pressed={{
            opacity: 0.9,
            bg: "blue.600",
            width: "98%",
          }}
        >
          <Text
            fontSize={dimension.fontScale * 18}
            fontWeight={"semibold"}
            color={"white"}
          >
            Add Usage
          </Text>
        </Button>
        {/* <Text>Home screen</Text>
  <Button bg="red" onPress={() => navigation.navigate("Profile")}>
    Home2
  </Button> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Home;
