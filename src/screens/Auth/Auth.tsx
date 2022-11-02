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
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useAuthController } from "../../viewController";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("screen");

const Auth = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    email,
    password,
    error,
    onChangeEmail,
    onChangePassword,
    onClickLogin,
  } = useAuthController();

  const toggleModal = () => setModalVisible(!modalVisible);

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
        <Box
          alignItems={"center"}
          justifyContent={"space-around"}
          flex={5.5}
          width={"100%"}
        >
          <TextInput
            mb={"m"}
            value={email}
            onChange={onChangeEmail}
            placeholder={"Adresse Mail"}
          />
          <TextInput
            mb={"m"}
            value={password}
            onChange={onChangePassword}
            placeholder={"Mot de Passe"}
          />
          <Button primary title="Se Connecter" onPress={onClickLogin} />
          <Button primary={false} title="S'inscrire" onPress={toggleModal} />
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
          <TouchableOpacity onPress={() => navigation.navigate("Mpo")}>
            <Text variant={"body"} color="white">
              Mot de Passe Oublié ?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text variant={"body"} color="white">
              Aide ?
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
      {modalVisible && (
        <ConfirmationModal
          modalVisible={modalVisible}
          ToggleModal={toggleModal}
        />
      )}
    </ImageBackground>
  );
};

function ConfirmationModal({ modalVisible, ToggleModal }) {
  const navigation = useNavigation();
  const { password1, password, onChangePassword1 } = useAuthController();

  const handleValidate = () => {
    if (password !== password1) {
      Alert.alert("Les mots de passe ne sont pas identiques");
      return;
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        ToggleModal();
      }}
    >
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Box
          padding={"m"}
          backgroundColor={"white"}
          justifyContent="space-around"
          alignItems={"center"}
        >
          <Text variant={"title2"} textAlign={"center"}>
            Veuilez Confirmer le Mot de passe:
          </Text>
          <TextInput
            my={"m"}
            value={password1}
            onChange={onChangePassword1}
            placeholder={"Mot de Passe"}
          />
          <Button
            primary={true}
            title="Valider"
            onPress={() => navigation.navigate("ProfileUpdate")}
          />
        </Box>
      </Box>
    </Modal>
  );
}
export default Auth;
