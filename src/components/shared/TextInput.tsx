import React, { ReactNode } from "react";
import { BoxProps, TextProps } from "@shopify/restyle";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { Theme } from "../../theme";
import Box from "./Box";

enum InputType {
  text,
  dropdown,
}

type InputProps = {
  icon?: ReactNode;
  type?: keyof typeof InputType;
  placeholder?: string;
  value: string;
  dropdownValues?: string[];
  onChange: () => void;
} & Partial<BoxProps<Theme>>;

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  value,
  onChange,
  type,
  dropdownValues,
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
      {type == "text" ? (
        <TextInput
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <Picker selectedValue={value} onValueChange={onChange}>
          {dropdownValues?.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      )}
    </Box>
  );
};

export default Input;
