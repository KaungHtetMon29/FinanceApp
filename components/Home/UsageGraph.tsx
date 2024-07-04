import { Box, Flex, HStack, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function UsageGraph() {
  const dimension = useWindowDimensions();
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "#FFAB05",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#FF6B45",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "#FF2E7E",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#D52DB7",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "#6050DC",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <Flex width={"full"} padding={3} borderRadius={"xl"} bg={"purple.100"}>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        style={{ display: "flex" }}
      >
        <Text fontSize={16} fontWeight={"bold"} opacity={0.8}>
          Last Month Usage
        </Text>
        <PieChart
          hasLegend={false}
          paddingLeft=""
          data={data}
          width={dimension.width}
          height={200}
          center={[100, 0]}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          absolute
        />
        <HStack space={4}>
          <HStack alignItems={"center"} space={1}>
            <FontAwesome6 name="bowl-food" size={18} color="#FFAB05" />
            <Text
              textAlign={"center"}
              color="#FFAB05"
              fontWeight={"bold"}
              fontSize={12}
            >
              10%
            </Text>
          </HStack>
          <HStack alignItems={"center"} space={1}>
            <FontAwesome5 name="tshirt" size={16} color="#FF6B45" />
            <Text
              textAlign={"center"}
              color="#FF6B45"
              fontWeight={"bold"}
              fontSize={12}
            >
              10%
            </Text>
          </HStack>
          <HStack alignItems={"center"} space={1}>
            <FontAwesome name="heart" size={18} color="#FF2E7E" />
            <Text
              textAlign={"center"}
              color="#FF2E7E"
              fontWeight={"bold"}
              fontSize={12}
            >
              10%
            </Text>
          </HStack>
          <HStack alignItems={"center"} space={1}>
            <FontAwesome name="bus" size={18} color="#D52DB7" />
            <Text
              textAlign={"center"}
              color="#D52DB7"
              fontWeight={"bold"}
              fontSize={12}
            >
              10%
            </Text>
          </HStack>
          <HStack alignItems={"center"} space={1}>
            <FontAwesome name="building" size={18} color="#6050DC" />
            <Text
              textAlign={"center"}
              color="#6050DC"
              fontWeight={"bold"}
              fontSize={12}
            >
              10%
            </Text>
          </HStack>
        </HStack>
      </Box>

      {/* <Box
        width={"full"}
        height={"64"}
        bg={"purple.200"}
        borderRadius={"2xl"}
      ></Box> */}
    </Flex>
  );
}
