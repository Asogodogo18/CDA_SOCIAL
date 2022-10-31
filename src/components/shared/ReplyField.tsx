import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Ionicons, Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import Box from "./Box";
import Text from "./Text";
import SectionIcon, { Icons, Icon } from "./SectionIcon";

type ReplyFieldProps = {
  placeholder: string;
  value: string;
  onChange: () => void;
};

const ReplyField: React.FC<ReplyFieldProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const [visibleBottom, setVisibleBottom] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = ["60%", "60%"];

  // callbacks
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log("handleSheetChanges", index);
  // }, []);
  // const BottomSheets = () => {
  //   return (

  //   );
  // };
  return (
    <>
      {visibleBottom && (
        
       
        <Box style={{ padding: 5,borderTopRightRadius:50,borderTopLeftRadius:50,zIndex:1000 }} bg={'white'} elevation={5}>
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
            iconName="document-text-outline"
            placeholder="Document"
            size={40}
            type={Icons.Ionicons}
            onPress={() => {}}
          />
          <SectionIcon
            color="black"
            iconName="md-location-outline"
            placeholder="Localisation"
            size={40}
            type={Icons.Ionicons}
            onPress={() => {}}
          />
          <SectionIcon
            color="black"
            iconName="contacts"
            placeholder="Contact"
            size={40}
            type={Icons.AntDesign}
            onPress={() => {}}
          />
        </Box>

  
  )}
      <Box
        height={60}
        width={"100%"}
        backgroundColor={"white"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Box
          height={40}
          width={"100%"}
          flexDirection={"row"}
          flex={7.5}
          borderColor={"borderColor1"}
          borderWidth={1}
          borderRadius={40}
          backgroundColor={"fadingWhite"}
        >
          <Box
            height={40}
            width={60}
            borderRadius={40}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"lightgreen"}
          >
            <TouchableOpacity onPress={() => setVisibleBottom(!visibleBottom)}>
              {
                visibleBottom ? <EvilIcons name="close" size={24} color="white" />:<Ionicons name="add" size={28} color="white" />

              }
            </TouchableOpacity>
          </Box>
          <TextInput
            style={{ paddingLeft: 5 }}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
          />
        </Box>
        <Box
          flex={2.5}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <TouchableOpacity>
            <Box
              height={36}
              width={36}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={40}
              backgroundColor={"greenPrimary"}
            >
              <Ionicons name="md-send-sharp" size={18} color="white" />
            </Box>
          </TouchableOpacity>
          <Entypo name="emoji-happy" size={40} color="gray" />
        </Box>
      </Box>
    
    </>
  );
};

export default ReplyField;
