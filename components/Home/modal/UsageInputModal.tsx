import {
  Button,
  CheckIcon,
  FormControl,
  Input,
  KeyboardAvoidingView,
  Menu,
  Modal,
  Select,
} from "native-base";
import React from "react";
import { Platform } from "react-native";
import { Categories } from "../../../types/Categories";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function UsageInputModal({
  inputprops,
}: {
  inputprops: Inputprops;
}) {
  const onfocus = { borderColor: "blue.500", bg: "blue.100" };
  const [shouldOverlapWithTrigger] = React.useState(false);
  const [position, setPosition] = React.useState("");
  let cat: Categories[] = [
    {
      name: "Clothing",
      icon: <FontAwesome5 name="tshirt" size={20} color="black" />,
    },
    {
      name: "Food",
      icon: <Ionicons name="fast-food" size={24} color="black" />,
    },
    {
      name: "Healthcare",
      icon: <FontAwesome name="heart" size={22} color="black" />,
    },
    {
      name: "Housing",
      icon: <FontAwesome name="building" size={24} color="black" />,
    },
    {
      name: "Transport",
      icon: <FontAwesome name="bus" size={24} color="black" />,
    },
    ,
  ];

  return (
    <Modal
      isOpen={inputprops.ModalVisible}
      onClose={() => inputprops.setModalVisible(false)}
      initialFocusRef={inputprops.initialRef}
      finalFocusRef={inputprops.finalRef}
    >
      <Modal.Content>
        {/* <Modal.CloseButton /> */}
        <Modal.Header>Enter Your Usage</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Usage in Kyats</FormControl.Label>
            <Input
              fontSize={15}
              ref={inputprops.initialRef}
              _focus={onfocus}
              keyboardType="numeric"
            />
          </FormControl>
          <FormControl isReadOnly>
            <FormControl.Label>Select Category</FormControl.Label>
            <Select
              _actionSheetContent={{
                shadow: "9",
              }}
              _actionSheet={{
                _backdrop: { bg: "" },
              }}
              fontSize={15}
              selectedValue={position}
              mx={{
                base: 0,
                md: "auto",
              }}
              onValueChange={(nextValue) => setPosition(nextValue)}
              _selectedItem={{
                bg: "blue.500",
              }}
              accessibilityLabel="Select a position for Menu"
            >
              {cat.map((item) => (
                <Select.Item
                  startIcon={item.icon}
                  _pressed={{ bg: "blue.200" }}
                  key={item.name}
                  label={item.name}
                  value={item.name}
                  borderRadius={"lg"}
                  _text={{ color: position === item.name ? "white" : "black" }}
                />
              ))}
            </Select>
            {/* <Input
              fontSize={15}
              ref={inputprops.initialRef}
              _focus={onfocus}
              keyboardType="numeric"
            /> */}
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
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
              _pressed={{ bg: "blue.700" }}
              bg={"blue.500"}
              onPress={() => {
                inputprops.setModalVisible(false);
              }}
            >
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
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
