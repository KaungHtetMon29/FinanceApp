import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  KeyboardAvoidingView,
  Modal,
  MoonIcon,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { Platform, SafeAreaViewBase, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Balance from "../components/Home/Balance";
import UsageGraph from "../components/Home/UsageGraph";
import RecentUsage from "../components/Home/RecentUsage";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import BalanceInput from "../components/Home/modal/Balanceinput";
import { lazy, Suspense, useRef, useState } from "react";
import Profile from "../components/Home/Profile";
import ProfileModal from "../components/Home/modal/ProfileModal";
import UsageInputModal from "../components/Home/modal/UsageInputModal";
import { localPageTypes } from "../navigation/Pagetypes";
import Container from "../components/container";
import { SafeAreaView } from "react-native-safe-area-context";
function Home({ navigation }: { navigation: localPageTypes }) {
  const dimension = useWindowDimensions();
  const [ModalVisible, setModalVisible] = useState(false);
  const [PfModalVisible, setPfModalVisible] = useState(false);
  const [UsageModalVisible, setUsageModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const UserInputModalLazy = lazy(
    () => import("../components/Home/modal/UsageInputModal")
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View flex={1} paddingBottom={3}>
          <BalanceInput
            inputprops={{ ModalVisible, setModalVisible, initialRef, finalRef }}
          />
          {/* <ProfileModal
          navigation={navigation}
          inputprops={{
            ModalVisible: PfModalVisible,
            setModalVisible: setPfModalVisible,
            initialRef,
            finalRef,
          }}
        /> */}
          <Suspense
            fallback={
              <View
                background={"rgba(0,0,0,0.5)"}
                position={"absolute"}
                flex={1}
                width={"full"}
                height={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                zIndex={1}
              >
                <AntDesign name="loading1" size={50} color="white" />
              </View>
            }
          >
            <UserInputModalLazy
              inputprops={{
                ModalVisible: UsageModalVisible,
                setModalVisible: setUsageModalVisible,
                initialRef,
                finalRef,
              }}
            />
          </Suspense>
          <Container>
            <VStack justifyContent={"space-between"} height={"full"}>
              <VStack flexGrow={0.6} space={(dimension.height / 100) * 1.4}>
                <Profile navigation={navigation} />
                <Balance
                  navigation={navigation}
                  setModalVisible={setModalVisible}
                />
                <UsageGraph />
                <RecentUsage navigation={navigation} />
              </VStack>

              <Button
                onPress={() => setUsageModalVisible(true)}
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
            </VStack>
          </Container>
        </View>

        {/* <Text>Home screen</Text>
  <Button bg="red" onPress={() => navigation.navigate("Profile")}>
    Home2
  </Button> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default Home;
