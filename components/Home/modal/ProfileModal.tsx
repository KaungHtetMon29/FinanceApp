import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  KeyboardAvoidingView,
  Modal,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export default function ProfileModal({
  inputprops,
  navigation,
}: {
  inputprops: Inputprops;
  navigation: NavigationProp<ParamListBase>;
}) {
  const onfocus = { borderColor: "blue.500", bg: "blue.100" };

  return (
    <Modal
      isOpen={inputprops.ModalVisible}
      onClose={() => inputprops.setModalVisible(false)}
      initialFocusRef={inputprops.initialRef}
      finalFocusRef={inputprops.finalRef}
    >
      <Modal.Content padding={4}>
        {/* <Modal.CloseButton /> */}
        <Modal.Header alignItems={"center"}>
          <HStack alignItems={"center"} space={2}>
            <AntDesign name="setting" size={24} color="black" />
            <Text fontSize={18} fontWeight={"semibold"}>
              Setting
            </Text>
          </HStack>
        </Modal.Header>
        <Modal.Body>
          <VStack space={4}>
            <Button
              flex={1}
              bg={"blue.500"}
              onPress={() => {
                navigation.navigate("Profile Setting"),
                  inputprops.setModalVisible(false);
              }}
            >
              <HStack
                paddingX={10}
                width={"full"}
                flexDir={"row"}
                alignItems={"center"}
                space={5}
              >
                <Box width={"1/6"}>
                  <AntDesign name="profile" size={20} color="white" />
                </Box>
                <Box width={"full"}>
                  <Text fontSize={15} fontWeight={"semibold"} color={"white"}>
                    Update Profile
                  </Text>
                </Box>
              </HStack>
            </Button>
            <Button
              flex={1}
              bg={"blue.500"}
              onPress={() => {
                navigation.navigate("Login"), inputprops.setModalVisible(false);
              }}
            >
              <HStack
                space={5}
                paddingX={10}
                width={"full"}
                flexDir={"row"}
                alignItems={"center"}
              >
                <Box width={"1/6"}>
                  <AntDesign name="logout" size={20} color="white" />
                </Box>
                <Box width={"full"}>
                  <Text fontSize={15} fontWeight={"semibold"} color={"white"}>
                    Logout
                  </Text>
                </Box>
              </HStack>
            </Button>
          </VStack>

          {/* <FormControl>
            <FormControl.Label>Salary in Kyats</FormControl.Label>
            <Input
              fontSize={15}
              ref={inputprops.initialRef}
              _focus={onfocus}
              keyboardType="numeric"
            />
          </FormControl> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                inputprops.setModalVisible(false);
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"blue.500"}
              onPress={() => {
                inputprops.setModalVisible(false);
              }}
            >
              Save
            </Button>
          </Button.Group>
        </Modal.Footer> */}
      </Modal.Content>
    </Modal>
  );
}

interface Inputprops {
  ModalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  initialRef: React.RefObject<any>;
  finalRef: React.RefObject<any>;
}
