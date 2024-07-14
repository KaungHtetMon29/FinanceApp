import { HStack, Switch, Text, VStack } from "native-base";
import { useState } from "react";

export default function NotiSetting({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const [enabled, setenabled] = useState(false);
  return (
    <HStack
      alignItems={"normal"}
      justifyContent={"space-between"}
      backgroundColor={"white"}
      padding={4}
      rounded={"xl"}
      shadow={1}
    >
      <HStack width={"full"} space={2} justifyContent={"space-between"}>
        <VStack space={1}>
          <Text fontSize={17} fontWeight={"bold"}>
            {name}
          </Text>
          <Text fontSize={13} fontWeight={"normal"}>
            {description}
          </Text>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Switch
            size={"lg"}
            thumbColor={"white"}
            onToggle={() => setenabled((prev) => !prev)}
            value={enabled}
          />
        </VStack>

        {/* {description && (
          <Text fontSize={13} fontWeight={"normal"} opacity={0.6}>
            {description}
          </Text>
        )} */}
      </HStack>
    </HStack>
  );
}
