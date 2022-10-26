import React from "react";
import { BoxProps } from "@shopify/restyle";
import { Theme } from "../../theme";
import Box from "../shared/Box";
import Text from "../shared/Text";

type FifthStepProps = {} & Partial<BoxProps<Theme>>;

const FifthStep: React.FC<FifthStepProps> = ({ ...props }) => {
  return (
    <Box
      backgroundColor={"fadingWhite"}
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    >
      <Text variant={"body2"}>TEXT</Text>
    </Box>
  );
};

export default FifthStep;
