import React from 'react'
import { BoxProps } from "@shopify/restyle";
import { Theme } from "../../theme";
import Box from "../shared/Box";
import Text from "../shared/Text";

type ThirdStepProps = {} & Partial<BoxProps<Theme>>;

const ThirdStep :React.FC<ThirdStepProps> = ({ ...props }) => {
  return (
    <Box backgroundColor={'fadingWhite'} flex={1} justifyContent={"center"} alignItems={"center"} {...props}>
      <Text variant={'body2'} >TEXT</Text>
    </Box>
  )
}

export default ThirdStep