import React, { useState } from "react";
import Box from "../shared/Box";
import Text from "../shared/Text";
import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { SectionInput, Line } from "../";


const Securite = () => {
  const navigation = useNavigation();
const [passWord, setPassWord] = useState("Modifier votre Mot de Passe")
const [voirProfil, setVoirProfil] = useState("Toutes Les Personnes")
const [msgEnvoie, setMsgEnvoie] = useState("Toutes Les Personnes")
const [afficheProfil, setAfficheProfil] = useState("oui")
const pass = [
  {
    label: "Mot de Pass",
    value: passWord,
    onChange: (text) => setPassWord(text),
  },
];
const showProfil = [
  {
    label: "Qui peut voir mon profil ?",
    value: voirProfil,
    onChange: (text) => setVoirProfil(text),
  },
];
const whoSendMsg = [
  {
    label: "Qui peut m'envoyer un message ?",
    value: msgEnvoie,
    onChange: (text) => setMsgEnvoie(text),
  },
];
const showProfilSearch = [
  {
    label: "Afficher votre profil dans les moteurs de recherche",
    value: afficheProfil,
    onChange: (text) => setAfficheProfil(text),
  },
];
  return (
    <Box flex={1}>
      <Box
        flexDirection={"row"}
        backgroundColor={"white"}
        elevation={5}
        height={50}
        width={"100%"}
        mt={"xl"}
        p={"ml"}
        // justifyContent={"center"}
        alignItems={"center"}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text variant={"titleBold"} marginLeft={"xl"}>
          Sécurité et Confidentialité
        </Text>
      </Box>
      <SectionInput data={pass} title="Sécurité" />
      <Line
        width={"100%"}
        height={2}
        alignSelf={"center"}
        backgroundColor={"lightgreen"}
      />
      <Text variant={'title1'} margin={'xs'} padding={'xs'} mt={"xl"}>Confidentialité</Text>
      <SectionInput data={showProfil} title="" />
      <SectionInput data={whoSendMsg} title="" />
      <SectionInput data={showProfilSearch} title="" />

    </Box>
  );
};

export default Securite;
