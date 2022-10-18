import {
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const { height, width } = Dimensions.get("screen");
import {
  Box,
  Avatar,
  Text,
  TextInput,
  Button,
  AuthSectionDivider,
  SocialIconGroup,
} from "../../components";
import { AntDesign } from "@expo/vector-icons";
import BgForgot from "../../../assets/bg_forgot.svg";
import Banner from "../../../assets/logo_forgot_password.svg";
const ForgotPasswordScreen = () => {
  return (
    <Box flex={1} pt={"xl"}>
      <TouchableOpacity>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      <Text variant={"subheader"} textAlign={"center"}>RECUPERATION MOT DE PASSE</Text>
      <Banner style={{height:50,width:50}} />
      <BgForgot stye={{
            overflow: "hidden",
            position: "absolute",
  
            zIndex: -10,
            bottom:0,

      }}/>
    </Box>
  );
};

export default ForgotPasswordScreen;
