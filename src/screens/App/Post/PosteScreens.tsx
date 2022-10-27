import React, { useRef } from "react";
import { Box, Text } from "../../../components";
import BottomSheet from "@gorhom/bottom-sheet";
import SectionIcon, { Icons } from "../../../components/shared/SectionIcon";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
const PosteScreens = ({ isActive }: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = ["15%", '50%',"80%"];
  return (
    <Box flex={1} pt={"xxl"}>
      <Box
        height={50}
        width={"100%"}
        elevation={2}
        backgroundColor={"white"}
        justifyContent={"space-around"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <TouchableOpacity style={{}}>
          <EvilIcons name="close" size={30} color="black" />
        </TouchableOpacity>
        <Text variant={"titleBold"}>Commence le poste</Text>
        <TouchableOpacity style={{}}>
          <Text variant={"titleBold"} color={"greenDark"}>
            Publier
          </Text>
        </TouchableOpacity>
      </Box>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <Box
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <SectionIcon
            color="black"
            iconName="camera"
            placeholder="Caméra"
            size={40}
            type={Icons.EvilIcons}
            onPress={() => {}}
          />
          <SectionIcon
            color="black"
            iconName="ios-library-outline"
            placeholder="Bibilothéque Photo et Vidéo"
            size={40}
            type={Icons.Ionicons}
            onPress={() => {}}
          />
          <SectionIcon
            color="black"
            iconName="emoji-happy"
            placeholder="Emoji"
            size={40}
            type={Icons.Entypo}
            onPress={() => {}}
          />
          <SectionIcon
            color="black"
            iconName="document-text-outline"
            placeholder="Gif"
            size={40}
            type={Icons.Ionicons}
            onPress={() => {}}
          />
        </Box>
      </BottomSheet>
    </Box>
  );
};

export default PosteScreens;
