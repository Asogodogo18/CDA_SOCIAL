import {
  Box,
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
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useAuthController } from "../../viewController";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../Context/AuthContext";
import { getDataObject } from "../../services/storage";
import { useUserContext } from "../../Context";
import { USER_KEY } from "../../constants/general-constants";
const { height, width } = Dimensions.get("screen");

const Auth = ({ navigation }) => {
  const { updateEmail, updatePassword } = useAuth();
  const {
    email,
    password,
    error,
    onChangeEmail,
    onChangePassword,
    onClickLogin,
    isLoading,
  } = useAuthController();
  const { signedIn, onSignInSuccess } = useUserContext();

  const [sessionCheck, setSessionCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!modalVisible);

  const handleSignUp = () => {
    if (email === "" || password === "") {
      Alert.alert("Les Champs sont vides");
      return;
    }
    toggleModal();
    updatePassword(password);
    updateEmail(email);
  };

  const Initialization = async () => {
    setSessionCheck(true);
    let storedUserToken = await getDataObject(USER_KEY);
    let storedAuthToken = await getDataObject('auth');

    //console.log("stored Auth: ", storedAuthToken);
    //console.log("stored User: ", storedUserToken);
    if (storedUserToken) {
      onSignInSuccess({ user: storedUserToken, auth: storedAuthToken });

      setSessionCheck(false);
    }
    setSessionCheck(false);
  };

  useEffect(() => {
    Initialization();

    return () => {};
  }, []);

  if (sessionCheck) {
    return (
      <Box flex={1} justifyContent={"center"} alignItems={"center"} px={'xxl'}>
        <ActivityIndicator size={"large"} color="green" />
        <Text variant={"body1"} textAlign={"center"}>
          Veuillez patienter pendant que nous restaurons votre session
          précédente.{" "}
        </Text>
      </Box>
    );
  }
  return (
    <ImageBackground
      source={require("../../../assets/Auth/bg2.png")}
      style={{ height: height - 40, width }}
      resizeMode="cover"
    >
      <Box
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
          <Button
            primary
            loading={isLoading}
            title="Se Connecter"
            onPress={onClickLogin}
          />
          <Button primary={false} title="S'inscrire" onPress={handleSignUp} />
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
          // password={password}
          modalVisible={modalVisible}
          ToggleModal={toggleModal}
        />
      )}
    </ImageBackground>
  );
};

function ConfirmationModal({ modalVisible, ToggleModal }) {
  const navigation = useNavigation();
  const { password, password1, onChangePassword1 } = useAuthController();

  //console.log("modal 1:", password);
  //console.log("modal 2:", password1);

  const handleValidate = () => {
    if (password !== password1) {
      Alert.alert("Les mots de passe ne sont pas identiques");
      return;
    }
    navigation.navigate("ProfileUpdate");
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
          minHeight={250}
          borderRadius={10}
          padding={"ml"}
          backgroundColor={"white"}
          justifyContent="space-around"
          alignItems={"center"}
        >
          <Text variant={"title"} fontSize={18} textAlign={"center"}>
            Veuillez Confirmer le{"\n"} Mot de passe
          </Text>
          <TextInput
            my={"m"}
            borderWidth={1}
            borderColor={"gray"}
            value={password1}
            onChange={onChangePassword1}
            placeholder={"Mot de Passe"}
          />
          <Button primary={true} title="Valider" onPress={handleValidate} />
        </Box>
      </Box>
    </Modal>
  );
}
export default Auth;
