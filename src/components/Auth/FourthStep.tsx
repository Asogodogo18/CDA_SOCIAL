import React from 'react'
import { BoxProps } from "@shopify/restyle";
import { Theme } from "../../theme";
import Box from "../shared/Box";
import Text from "../shared/Text";

type FourthStepProps = {} & Partial<BoxProps<Theme>>;

const FourthStep:React.FC<FourthStepProps> = ({ ...props })=> {
  return (
    <Box backgroundColor={'danger'} flex={1} justifyContent={"center"} alignItems={"center"} {...props}>
      <Text variant={'body2'} >TEXT</Text>
    </Box>
  )
}

export default FourthStep