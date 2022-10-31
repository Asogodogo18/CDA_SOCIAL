import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, Button, Text, TextInput } from "../../../components";
import BottomSheet from "@gorhom/bottom-sheet";
import SectionIcon, { Icons } from "../../../components/shared/SectionIcon";
import {
  Image,
  TextInput as LegacyInput,
  TouchableOpacity,
} from "react-native";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const PosteScreens = ({ isActive }: any) => {
  const inputRef = useRef<LegacyInput>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [txtPoste, setTxtPoste] = useState("");
  const [showPoste, setShowPoste] = useState("");
  const [image, setImage] = useState([]);

  // variables
  const snapPoints = ["15%", "50%"];
  const navigation = useNavigation();
  const pickImageVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [10, 13],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage([...image, { ...result }]);
      console.log("image", image);
    }
  };
  const onRemove = (index) => {
    setImage([
      ...image.slice(0, index),
      ...image.slice(index + 1, image.length),
    ]);
  };

  return (
    <Box flex={1} backgroundColor={"lightgreen"} pt={"xxl"}>
      <Box
        height={50}
        width={"100%"}
        elevation={2}
        backgroundColor={"white"}
        justifyContent={"space-around"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <EvilIcons name="close" size={30} color="black" />
        </TouchableOpacity>
        <Text variant={"titleBold"}>Commence le poste</Text>
        {txtPoste && (
          <TouchableOpacity>
            <Text variant={"titleBold"} color={"greenDark"}>
              Publier
            </Text>
          </TouchableOpacity>
        )}
      </Box>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        p={"xl"}
        justifyContent={"space-around"}
        bg={"danger"}
        height={120}
      >
        <Avatar
          type={"menu"}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnozsb1QEhjyjE7p-bGl9hQOkJh0brsUKoA&usqp=CAU",
          }}
          elevation={5}
        />
        <Box flexDirection={"column"} mt={"l"}>
          <Text
            variant={"titleBold"}
            m={"m"}
            style={{ position: "relative", width: 200 }}
          >
            john Doe
          </Text>

          <TextInput
            mb={"xl"}
            type="dropdown"
            width={"75%"}
            height={"55%"}
            value={showPoste}
            dropdownValues={[
              "Qui peut voir mon profil?",
              "Toutes Les Personnes",
              "Mes Followers",
              "Personne",
            ]}
            onChange={setShowPoste}
          />
        </Box>
      </Box>

      <Box
        minHeight={150}
        maxHeight={350}
        backgroundColor={"lightgreen"}
        alignItems={"center"}
        p={"ml"}
      >
        <TextInput
          // inputRef={inputRef}
          onChange={setTxtPoste}
          value={txtPoste}
          minHeight={120}
          maxHeight={300}
          width={"90%"}
          borderRadius={5}
          alignSelf={"center"}
          placeholder={"Quoi de neuf................"}
        />
        {image.map((image, index) => {
          return (
            <Box
              style={{
                width: 180,
                height: 180,

                marginTop: 10,
                elevation: 0,
                borderRadius: 10,
                //overflow: "hidden",
                //alignContent: "center",

                // marginLeft: 5,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              <TouchableOpacity
                onPress={() => onRemove(index)}
                style={{
                  position: "absolute",
                  top: 5,
                  elevation: 5,
                  right: 5,
                  bottom: 0,
                  zIndex: 100,
                  backgroundColor: "white",
                  height: 30,
                  width: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Entypo name="circle-with-cross" size={27} color="red" />
              </TouchableOpacity>
              <Image
                source={{ uri: image.uri }}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
                key={index}
              />
            </Box>
          );
        })}
      </Box>
      {/* 
      <Button primary title="Press" onPress={() => inputRef.focus()} /> */}

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <Box
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <SectionIcon
            color="black"
            iconName="camera"
            placeholder="Caméra"
            size={40}
            type={Icons.EvilIcons}
            onPress={() => {}}
          />
          <SectionIcon
            color="black"
            iconName="ios-library-outline"
            placeholder="Bibilothéque Photo et Vidéo"
            size={40}
            type={Icons.Ionicons}
            onPress={pickImageVideo}
          />
          <SectionIcon
            color="black"
            iconName="emoji-happy"
            placeholder="Emoji"
            size={40}
            type={Icons.Entypo}
            onPress={() => {}}
          />
          <SectionIcon
            color="black"
            iconName="document-text-outline"
            placeholder="Gif"
            size={40}
            type={Icons.Ionicons}
            onPress={() => {}}
          />
        </Box>
      </BottomSheet>
    </Box>
  );
};

export default PosteScreens;
