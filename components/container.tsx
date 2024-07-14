import { ScrollView } from "native-base";
import { useWindowDimensions } from "react-native";

export default function Container({
  children,
  bg = "white",
  ...props
}: {
  children: any;
  bg?: string;
}) {
  const dimension = useWindowDimensions();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      paddingTop={dimension.width > 450 ? 10 : 5}
      paddingX={dimension.width > 450 ? 10 : 5}
      bg={bg}
    >
      {children}
    </ScrollView>
  );
}
