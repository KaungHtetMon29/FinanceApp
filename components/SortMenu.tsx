import { Box, Flex, Menu, Text, View } from "native-base";
import { Pressable, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function SortMenu() {
  const dimension = useWindowDimensions();
  const sorttypes: SortMenuProps[] = ["Date Range", "Amount", "Usage"];
  return (
    <Flex
      paddingX={dimension.width > 450 ? 10 : 5}
      paddingY={3}
      flexDir={"row"}
      justifyContent={"space-between"}
      bg={"blue.500"}
    >
      <Text fontSize={dimension.fontScale * 17} color={"white"}>
        Sort By
      </Text>
      <Menu
        bg={"white"}
        w={"full"}
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps}>
              <AntDesign name="filter" size={24} color="white" />
            </Pressable>
          );
        }}
      >
        {sorttypes.map((sorttype) => (
          <Menu.Item key={sorttype}>{sorttype}</Menu.Item>
        ))}
        {/* <Menu.Item>Date Range</Menu.Item>
        <Menu.Item>Amount</Menu.Item>
        <Menu.Item>Usage</Menu.Item> */}
      </Menu>
    </Flex>
  );
}

type SortMenuProps = "Date Range" | "Amount" | "Usage";
