import { Box, Input, Text } from "native-base";

export default function ProfileInputs({ Lablename }: { Lablename: string }) {
  return (
    <Box width={"full"}>
      <Text fontSize={18} fontWeight={"medium"}>
        {Lablename}
      </Text>
      <Input
        placeholder={Lablename}
        backgroundColor={"white"}
        rounded={"xl"}
        fontSize={16}
      ></Input>
    </Box>
  );
}
