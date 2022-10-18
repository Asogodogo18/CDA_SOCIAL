import {
  Box,
  Avatar,
  Text,
  TextInput,
  Button,
  AuthSectionDivider,
  SocialIconGroup,
} from "../../components";
import {
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const { height, width } = Dimensions.get("screen");
const Auth = ({navigation}) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  return (
    <ImageBackground
      source={require("../../../assets/Auth/bg2.png")}
      style={{ height: height - 40, width }}
      resizeMode="cover"
    >
      <Box
        // height={40}
        // width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flex={1}
        backgroundColor={"overlay"}
      >
        <Box
          alignItems={"center"}
          justifyContent={"space-around"}
          flex={3}
          my={"xl"}
          pt={"m"}
        >
          <Image
            source={require("../../../assets/logo.png")}
            style={{ width: 64, height: 64 }}
            resizeMode="contain"
          />
          <Text variant={"subheader"} color="white" marginTop={"xl"}>
            CLUSTERDIGITALAFRICA
          </Text>
        </Box>
        <Box alignItems={"center"} justifyContent={"space-around"} flex={5.5} width={"100%"}>
          <TextInput
            mb={"m"}
            value={userName}
            onChange={setUserName}
            placeholder={"Nom D'utilisateur"}
          />
          <TextInput
            mb={"m"}
            value={passWord}
            onChange={setPassWord}
            placeholder={"Mot de Passe"}
          />
          <Button primary title="Se Connecter" onPress={() => {}} />
          <Button primary={false} title="S'inscrire" onPress={() => {}} />
          <AuthSectionDivider />
          <SocialIconGroup onPress={() => {}} />
        </Box>
        <Box
          flexDirection={"row"}
          flex={1.5}
          px={"m"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <TouchableOpacity onPress={()=>navigation.navigate('Mpo')}>
            <Text variant={"body"} color="white">
              Mot de Passe Oublie
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text variant={"body"} color="white">
              Aide ?
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </ImageBackground>
  );
};

export default Auth;