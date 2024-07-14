import { Box } from "native-base";
import { useWindowDimensions } from "react-native";

export default function ProfileSettingContainer({ children, ...props }) {
  const dimension = useWindowDimensions();
  return (
    <Box
      shadow={1}
      rounded={"xl"}
      paddingX={4}
      paddingY={dimension.width < 360 ? 8 : 6}
      background={"white"}
    >
      {children}
    </Box>
  );
}
