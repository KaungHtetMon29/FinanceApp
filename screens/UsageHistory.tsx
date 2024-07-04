import {
  AlertDialog,
  Box,
  Divider,
  FlatList,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import Usage from "../components/Usage";
import { Alert, useWindowDimensions } from "react-native";
import SortMenu from "../components/SortMenu";
import UsageInputModal from "../components/Home/modal/UsageInputModal";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function UsageHistory() {
  const dimension = useWindowDimensions();
  const [usagemodalvisible, setusagemodalvisible] = useState(false);
  const initialref = useRef(null);
  const finalref = useRef(null);
  const [data, setdata] = useState([]);
  const renderitem = ({ item }) => (
    <Usage
      setusagemodalvisible={setusagemodalvisible}
      mode="edit"
      type="Food"
    />
  );
  const keyExtractor = useCallback((item) => item.id, [data]);
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
    <View bg={"white"} flex={1}>
      <UsageInputModal
        inputprops={{
          ModalVisible: usagemodalvisible,
          setModalVisible: setusagemodalvisible,
          initialRef: initialref,
          finalRef: finalref,
        }}
      />
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
      <Divider />
      <SortMenu />
      <Divider />
      <FlatList
        contentContainerStyle={{ paddingVertical: 15 }}
        bg={"white"}
        justifyItems={"center"}
        paddingX={dimension.width > 450 ? 10 : 5}
        data={data}
        renderItem={renderitem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <View height={7} />}
      />
    </View>
  );
}
export default React.memo(UsageHistory);
