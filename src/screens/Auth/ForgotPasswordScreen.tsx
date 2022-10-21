import React, { useState } from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Box, Avatar, Text, TextInput, Button } from "../../components";
import { AntDesign } from "@expo/vector-icons";
import Banner from "../../../assets/bg_forgot.svg";
import Logo from "../../../assets/logo_forgot_password.svg";
const { height, width } = Dimensions.get("screen");

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [switchController, setSwitchController] = useState(false);
  return (
    <Box  height={height} width={width} pt={"xl"} backgroundColor={"white"} >
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{padding:5,margin:5}}>
        <AntDesign name="left" size={30} color="black" />
      </TouchableOpacity>

      <Text variant={"subheader"} textAlign={"center"} style={{width:250,alignSelf:'center',fontSize:30,}} >
        RECUPERATION MOT de PASSE
      </Text>
      <Logo
        height={250}
        width={250}
        style={{
          overflow: "hidden",
          position: "relative",
       
          alignSelf: "center",
        }}
      />
      {switchController ? (
        <TextInput
          mb={"m"}
          value={email}
          onChange={setEmail}
          placeholder={"Votre Email"}
          alignSelf={"center"}
          elevation={3}
        />
      ) : (
        <TextInput
          mb={"m"}
          value={telephone}
          onChange={setTelephone}
          placeholder={"Votre Numero Telephone"}
          alignSelf={"center"}
          elevation={3}
        />
      )}

      {!switchController ? (
        <TouchableOpacity onPress={() => setSwitchController(true)} style={{position:'relative',right:0,left:240,}}>
          <Text variant={"title"}  color={'overlay'}>
            Utiliser Email
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setSwitchController(false)} style={{position:'relative',right:0,left:90}}>
          <Text variant={"title"} textAlign={"center"} color={'overlay'}>
            Utiliser Telephone
          </Text>
        </TouchableOpacity>
      )}

      <Button
        primary
        onPress={() => {}}
        title="VALIDER"
        alignSelf={"center"}
        mt={"l"}
        elevation={5}
      />
      <Banner
        style={{
          overflow: "hidden",
          position: "absolute",

          zIndex: -10,
          bottom: 0,
        }}
      />
    </Box>
  );
};

export default ForgotPasswordScreen;
