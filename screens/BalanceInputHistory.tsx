import { Box, FlatList, Text } from "native-base";
import { useEffect, useState } from "react";
import { View, useWindowDimensions } from "react-native";

export default function BalanceInputHistory() {
  const [data, setdata] = useState([]);

  const dimension = useWindowDimensions();
  const getdata = async () => {
    //fetch data from api
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setdata(data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <View>
      <Box
        justifyContent={"center"}
        justifyItems={"center"}
        marginX={"auto"}
        paddingY={3}
      >
        <Text
          color={"blue.500"}
          fontSize={dimension.width > 450 ? 15 : 20}
          fontWeight={"semibold"}
        >
          Usage History
        </Text>
      </Box>
      <FlatList
        data={data}
        renderItem={(item) => <Text>test</Text>}
        keyExtractor={(i) => i.id}
      ></FlatList>
    </View>
  );
}
