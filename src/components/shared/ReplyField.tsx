import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

import Box from "./Box";

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
  return (
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
        borderRadius={30}
        backgroundColor={"fadingWhite"}
      >
        <Box
          height={40}
          width={60}
          borderRadius={30}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"lightgreen"}
        >
          <TouchableOpacity>
            <Ionicons name="add" size={28} color="white" />
          </TouchableOpacity>
        </Box>
        <TextInput
        style={{paddingLeft:5}}
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
            borderRadius={30}
            backgroundColor={"greenPrimary"}
          >
            <Ionicons name="md-send-sharp" size={18} color="white" />
          </Box>
        </TouchableOpacity>
        <Entypo name="emoji-happy" size={24} color="gray" />
      </Box>
    </Box>
  );
};

export default ReplyField;
