import React, { useState } from "react";
import Box from "../shared/Box";
import Text from "../shared/Text";
import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { SectionInput, Line } from "../";
import Input from "../shared/TextInput";

const Securite = () => {
  const navigation = useNavigation();
  const [passWord, setPassWord] = useState("Modifier votre Mot de Passe");
  const [voirProfil, setVoirProfil] = useState("");
  const [msgEnvoie, setMsgEnvoie] = useState("");
  const [afficheProfil, setAfficheProfil] = useState("");
  const pass = [
    {
      label: "Mot de Pass",
      value: passWord,
      onChange: (text) => setPassWord(text),
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
      <Text variant={"title1"} margin={"xs"} padding={"xs"} mt={"xl"}>
        Confidentialité
      </Text>

      <Input
        my={"m"}
        type="dropdown"
        width={'100%'}

        value={voirProfil}
        dropdownValues={[
          "Qui peut voir mon profil?",
          "Toutes Les Personnes",
          "Mes Followers",
          "Personne",
        ]}
        onChange={() => {}}
      />
      <Input
        my={"m"}
        type="dropdown"
        width={'100%'}

        value={msgEnvoie}
        dropdownValues={[
          "Qui peut m'envoyer un message?",
          "Toutes Les Personnes",
          "Les Gens Que je Suis",
        ]}
        onChange={() => {}}
      />
      <Input
        my={"m"}
        type="dropdown"
        value={afficheProfil}
        width={'100%'}
        dropdownValues={[
          "Afficher votre profil dans les moteurs de recherche?",
          "Oui",
          "Non",
        ]}
        onChange={() => {}}
      />
     
        <TouchableOpacity style={{justifyContent:'flex-start',marginVertical:50}}>
          <Text variant={"title"} marginLeft={"xl"} color={'gray'}>
            Supprimer Votre Profil
          </Text>
        </TouchableOpacity>
    
    </Box>
  );
};

export default Securite;
