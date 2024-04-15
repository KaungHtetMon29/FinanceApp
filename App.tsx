import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MyStack from "./navigation/Stack";
import { NativeBaseProvider, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeBaseProvider>
      <View bg={"white"} flex={1}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </NativeBaseProvider>
  );
}
