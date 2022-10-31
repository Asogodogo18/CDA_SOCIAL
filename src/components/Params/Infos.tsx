import { View } from "react-native";
import React, { useState } from "react";
import Box from "../shared/Box";
import Text from "../shared/Text";
import { SectionInput, Line, TextInput } from "../";

import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Infos = () => {
  const [name, setName] = useState("Doe");
  const [surName, setSurName] = useState("John");
  const [username, setUsername] = useState("@JohnDoe");
  const [email, setEmail] = useState("John_Doe@exemple.com");
  const [urlSite, setUrlSite] = useState("https://www.johndoe.com");
  const [bio, setBio] = useState("Dramatically leverage existing ");
  const [sexe, setSexe] = useState("");
const navigation = useNavigation()
  const user = [
    {
      label: "Nom de famille",
      value: name,
      onChange: (text) => setName(text),
    },
    {
      label: "Prénom",
      value: surName,
      onChange: (text) => setSurName(text),
    },
    {
      label: "Nom d’Utilisateur",
      value: username,
      onChange: (text) => setUsername(text),
    },
  ];
  const adress = [
    {
      label: "Email Utilisateur",
      value: email,
      onChange: (text) => setEmail(text),
    },
  ];
  const webSite = [
    {
      label: "Adress url de votre site web",
      value: urlSite,
      onChange: (text) => setUrlSite(text),
    },
  ];

  const biographie = [
    {
      label: "Bio",
      value: bio,
      onChange: (text) => setBio(text),
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
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="ios-chevron-back" size={24} color="black" />

        </TouchableOpacity>
        <Text variant={"titleBold"} marginLeft={"xl"}>
          Information Profil
        </Text>
      </Box>
      <SectionInput data={user} title="Nom d'utilise" />
      <Line
        width={"100%"}
        height={2}
        alignSelf={"center"}
        backgroundColor={"lightgreen"}
      />
      <SectionInput data={adress} title="Adress Electronique" />
      <Line
        width={"100%"}
        height={2}
        alignSelf={"center"}
        backgroundColor={"lightgreen"}
      />
      <SectionInput data={webSite} title="Site Web" />
      <Line
        width={"100%"}
        height={2}
        alignSelf={"center"}
        backgroundColor={"lightgreen"}
      />
      <SectionInput data={biographie} title="Votre Biographie" />
      <Line
        width={"100%"}
        height={2}
        alignSelf={"center"}
        backgroundColor={"lightgreen"}
      />
         <TextInput
            m={"xl"}
            type="dropdown"
            // width={"75%"}
            // height={"55%"}
            value={sexe}
            dropdownValues={[
              "Votre Sexe?",
              "Masculin",
              "Feminin",
            ]}
            onChange={setSexe}
          />
    </Box>
  );
};

export default Infos;
