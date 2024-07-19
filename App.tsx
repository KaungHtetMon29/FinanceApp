import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import MyStack from "./navigation/Stack";
import { extendTheme, NativeBaseProvider, Text, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import * as Font from "expo-font";

export default function App() {
  const dimension = useWindowDimensions();
  const theme = extendTheme({
    colors: {
      custombtn: {
        50: "rgba(0,122,255,.5)",
        100: "rgba(0,122,255,.6)",
        200: "rgba(0,122,255,.7)",
        300: "rgba(0,122,255,.8)",
        400: "#rgba(0,122,255,.9)",
        500: "#rgba(0,122,255,1)",
        600: "rgba(0,122,255,1)",
        700: "#rgba(0,122,255,1)",
        800: "rgba(0,98,181,1)",
        900: "rgba(0,122,206,1)",
      },
    },
    components: {
      Button: {
        defaultProps: {
          colorScheme: "custombtn",
        },
      },
      Switch: {
        defaultProps: { colorScheme: "custombtn" },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <View bg={"white"} flex={1}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}
