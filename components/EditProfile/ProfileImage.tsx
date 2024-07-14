import { Box, Image, Pressable } from "native-base";
import { AntDesign } from "@expo/vector-icons";
export default function ProfileImage() {
  return (
    <Box position={"relative"}>
      <Box
        background={"white"}
        shadow={2}
        borderColor={"rgba(0,122,255,.8)"}
        borderRadius={"full"}
        borderWidth={5}
        padding={1.5}
      >
        <Image
          borderRadius={"full"}
          source={{
            uri: "https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg",
          }}
          alt="profile"
          size={120}
        />
      </Box>

      <Box
        zIndex={1}
        shadow={2}
        position={"absolute"}
        right={0}
        bottom={0}
        background={"white"}
        rounded={"full"}
      >
        <Pressable onPress={() => console.log("update")}>
          <AntDesign name="pluscircle" size={34} color="rgba(0,122,255,1)" />
        </Pressable>
      </Box>
    </Box>
  );
}
