import React from "react";
import Box from "./Box";
import Text from "./Text";

type ErrorDisplayViewProps = {
  message: string;
};
const ErrorDisplayView: React.FC<ErrorDisplayViewProps> = ({ message }) => {
  return (
    <Box flex={1} backgroundColor={'white'} padding={"m"} justifyContent={"center"} alignItems={"center"}>
      <Text color={'danger'} variant={"body"} textAlign={"center"}>
        {message}
      </Text>
    </Box>
  );
};

export default ErrorDisplayView;
