import { View } from "react-native";
import React from "react";
import { BoxProps } from "@shopify/restyle";
import { Theme } from "../../theme";
import Box from "../shared/Box";
import Text from "../shared/Text";

type SecondFirstStepProps = {} & Partial<BoxProps<Theme>>;

const SecondStep: React.FC<SecondFirstStepProps> = ({ ...props }) => {
  return (
    <Box
      backgroundColor={"purpleLight"}
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    >
      <Text variant={"body2"}>TEXT</Text>
    </Box>
  );
};

export default SecondStep;
