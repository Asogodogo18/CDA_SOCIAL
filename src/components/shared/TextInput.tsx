import React, { ReactNode } from "react";
import { BoxProps, TextProps } from "@shopify/restyle";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Theme } from "../../theme";
import Box from "./Box";

type InputProps = {
  icon?: ReactNode;
  placeholder?: string;
  value: string;
  onChange: () => void;
} & Partial<BoxProps<Theme>>;

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  value,
  onChange,
  ...props
}) => {
  return (
    <Box
      py={"m"}
      px={"l"}
      borderRadius={30}
      backgroundColor="fadingWhite"
      alignItems={"center"}
      flexDirection={"row"}
      width={300}
      height={50}
      {...props}
    >
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        style={{width:"100%",height:"100%"}}
      />
    </Box>
  );
};

export default Input;
