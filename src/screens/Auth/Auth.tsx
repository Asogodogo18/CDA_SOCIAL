

import { Box,Avatar,Text } from "../../components";
import { ImageBackground,Dimensions } from "react-native";
import React from "react";
const {height,width}=Dimensions.get('screen')
const Auth = () => {
  return (
    <Box
      // height={40}
      // width={"100%"}
      flex={1}
   
      backgroundColor={"whitishGray"}
    >
      <ImageBackground source={require('../../../assets/Auth/bg2.png')} style={{height,width}} resizeMode='cover'>

      <Avatar type="main" source={require('../../../assets/logo.png')}/>
      <Text variant={"body"} color="white" marginTop={"l"}>CLUSTERDIGITALAFRICA</Text>
      </ImageBackground>
    </Box>
  );
};

export default Auth;
