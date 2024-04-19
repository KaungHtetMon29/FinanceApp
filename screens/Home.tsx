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

import Balance from "../components/Home/Balance";
import UsageGraph from "../components/Home/UsageGraph";
import RecentUsage from "../components/Home/RecentUsage";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import BalanceInput from "../components/Home/modal/Balanceinput";
import { useRef, useState } from "react";
import Profile from "../components/Home/Profile";
import ProfileModal from "../components/Home/modal/ProfileModal";
import UsageInputModal from "../components/Home/modal/UsageInputModal";
import { localPageTypes } from "../navigation/Pagetypes";
function Home({ navigation }: { navigation: localPageTypes }) {
  const dimension = useWindowDimensions();
  const [ModalVisible, setModalVisible] = useState(false);
  const [PfModalVisible, setPfModalVisible] = useState(false);
  const [UsageModalVisible, setUsageModalVisible] = useState(false);
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
        <ProfileModal
          navigation={navigation}
          inputprops={{
            ModalVisible: PfModalVisible,
            setModalVisible: setPfModalVisible,
            initialRef,
            finalRef,
          }}
        />
        <UsageInputModal
          inputprops={{
            ModalVisible: UsageModalVisible,
            setModalVisible: setUsageModalVisible,
            initialRef,
            finalRef,
          }}
        />
        <VStack flexGrow={0.6} space={(dimension.height / 100) * 2}>
          <Profile setProfileModal={setPfModalVisible} />
          <Balance navigation={navigation} setModalVisible={setModalVisible} />
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
        {/* <Text>Home screen</Text>
  <Button bg="red" onPress={() => navigation.navigate("Profile")}>
    Home2
  </Button> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Home;
