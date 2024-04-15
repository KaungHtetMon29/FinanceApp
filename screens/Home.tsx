import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  MoonIcon,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Balance from "../components/Home/Balance";
import UsageGraph from "../components/Home/UsageGraph";
import RecentUsage from "../components/Home/RecentUsage";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

function Home({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
  const dimension = useWindowDimensions();
  return (
    <View
      style={{ flex: 1 }}
      paddingTop={dimension.width > 450 ? 10 : 5}
      paddingX={dimension.width > 450 ? 10 : 5}
      bg={"white"}
    >
      <VStack
        space={(dimension.height / 100) * 2}
        paddingBottom={dimension.width > 450 ? 0 : 10}
      >
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
        <Balance navigation={navigation} />
        <UsageGraph />
        <RecentUsage navigation={navigation} />
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
      </VStack>

      {/* <Text>Home screen</Text>
    <Button bg="red" onPress={() => navigation.navigate("Profile")}>
      Home2
    </Button> */}
    </View>
  );
}
export default Home;
