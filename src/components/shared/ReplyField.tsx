import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Ionicons, Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import Box from "./Box";
import Text from "./Text";

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
  const snapPoints =  ["60%","60%"] ;

  // callbacks
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log("handleSheetChanges", index);
  // }, []);
  return (
    <>
      {visibleBottom && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          // onChange={handleSheetChanges}
          style={{}}
        >
          <Box style={{ padding: 20 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", height: 50, alignItems: "center" }}
            >
              <EvilIcons name="camera" size={40} color="black" />
              <Text variant={'subheader'} marginLeft={'ml'}>Caméra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", height: 50, alignItems: "center" }}
            >
              <Ionicons name="ios-library-outline" size={40} color="black" />
              <Text variant={'subheader'} marginLeft={'ml'}>Bibilothéque Photo et Vidéo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", height: 50, alignItems: "center" }}
            >
              <Ionicons name="document-text-outline" size={40} color="black" />
              <Text variant={'subheader'} marginLeft={'ml'}>Document</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", height: 50, alignItems: "center" }}
            >
              <Ionicons name="md-location-outline" size={40} color="black" />
              <Text variant={'subheader'} marginLeft={'ml'}>Localisation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", height: 50, alignItems: "center" }}
            >
              <AntDesign name="contacts" size={40} color="black" />
              <Text variant={'subheader'} marginLeft={'ml'}>Contact</Text>
            </TouchableOpacity>
          </Box>
        </BottomSheet>
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
              <Ionicons name="add" size={28} color="white" />
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
