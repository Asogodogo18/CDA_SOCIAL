import {
  Box,
  Avatar,
  Text,
  TextInput,
  Button,
  Line,
} from "../../../components";

import React from "react";
import Layout from "../../Layout";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SectionItems } from "../../../components";

import { General } from "../../../data/sectionItems";
import { useNavigation } from "@react-navigation/native";
const Settings = ({ navigation }) => {
 
  return (
    <Layout>
      <Box backgroundColor={"messageInBg"} flex={1} style={{ paddingTop: 20 }}>
        <Box
          flexDirection={"row"}
          alignItems={"center"}
          p={"m"}
          elevation={5}
          backgroundColor={"white"}
        >
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="ios-chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text variant={"titleBold"} style={{ marginLeft: 10 }}>
            Paramètre
          </Text>
        </Box>
        {General.map((item, index) => {
          return (
            <>
              <SectionItems
                key={index}
                data={item.data}
                title={item.title}
                navigation={navigation}
              />
              <Line
                width={"100%"}
                height={2}
                alignSelf={"center"}
                backgroundColor={"lightgreen"}
              />
            </>
          );
        })}
    
      </Box>
    </Layout>
  );
};

export default Settings
