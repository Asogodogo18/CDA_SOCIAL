import React from "react";
import { BoxProps, TextProps } from "@shopify/restyle";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Theme } from "../../theme";
import Box from "./Box";
import Text from "./Text";

type ButtonProps = {
  onPress: () => void;
  loading?: boolean;
  primary: boolean;
  title: string;
  textProps?: TextProps<Theme>;
} & Partial<BoxProps<Theme>>;

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  primary,
  loading,
  textProps,
  ...props
}) => (
  <TouchableOpacity onPress={onPress}>
    <Box
      width={300}
      height={50}
      py="m"
      px="xl"
      alignItems={"center"}
      justifyContent="center"
      backgroundColor={primary ? "greenPrimary" : "nobg"}
      borderRadius={30}
      borderWidth={1}
      borderColor={primary ? "borderColor1" : "borderColor2"}
      shadowOffset={{ height: 2, width: 0 }}
      shadowRadius={5}
      shadowColor="black"
      shadowOpacity={0.2}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text variant={"btnText1"} {...textProps}>
          {title}
        </Text>
      )}
    </Box>
  </TouchableOpacity>
);

export default Button;
