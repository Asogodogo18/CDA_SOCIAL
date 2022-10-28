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
  onChange: (param: any) => void;
  inputRef:React.MutableRefObject<TextInput> 
} & Partial<BoxProps<Theme>>;

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  value,
  onChange,
  type = "text",
  dropdownValues,
  inputRef,
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
      {type == "text" && (
        <TextInput
        ref={inputRef}
          multiline={true}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          style={{ width: "100%", height: "100%" }}
        />
      )}
      {type == "dropdown" && (
        <Picker
          style={{ width: "100%", height: "100%" }}
          mode={"dropdown"}
          placeholder={placeholder}
          selectedValue={value}
          onValueChange={onChange}
        >
          {dropdownValues?.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      )}
    </Box>
  );
};

export default Input;
