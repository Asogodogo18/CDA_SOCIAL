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
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";

const PosteScreens = ({ isActive }: any) => {
  const inputRef = useRef<LegacyInput>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [txtPoste, setTxtPoste] = useState("");
  const [showPoste, setShowPoste] = useState("");
  const [image, setImage] = useState([]);

  // variables
  const snapPoints = ["40%", "10%", ];
  const navigation = useNavigation();
  const pickImageVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage([...image, { ...result }]);
      console.log("image", image);
    }
  };

  const launcnCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
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
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor={"white"}>
        <Box
          height={50}
          width={"100%"}
          elevation={2}
          backgroundColor={"white"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Box flex={1} pl={"l"}>
            <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
              <EvilIcons name="close" size={30} color="black" />
            </TouchableOpacity>
          </Box>
          <Box flex={3}>
            <Text variant={"titleBold"}>Nouvelle Publication</Text>
          </Box>
          <Box flex={1}>
            {txtPoste && (
              <TouchableOpacity>
                <Text variant={"titleBold"} color={"greenDark"}>
                  Publier
                </Text>
              </TouchableOpacity>
            )}
          </Box>
        </Box>
        <Box
          flexDirection={"row"}
          alignItems={"center"}
          // bg={"danger"}
          height={120}
        >
          <Box flex={2} justifyContent={"space-around"} alignItems={"center"}>
            <Avatar
              type={"floating"}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnozsb1QEhjyjE7p-bGl9hQOkJh0brsUKoA&usqp=CAU",
              }}
              elevation={5}
            />
          </Box>
          <Box flex={4.5} justifyContent={"center"}>
            <Text variant={"titleBold"}>John Doe</Text>

            <TextInput
              inputStyle={{ fontSize: 10, width: "100%" }}
              borderRadius={5}
              type="dropdown"
              value={showPoste}
              height={30}
              minWidth={"40%"}
              maxWidth={"50%"}
              py={"s"}
              px={"s"}
              dropdownValues={[
                "Public",
                "Toutes Les Personnes",
                "Mes Followers",
                "Personne",
              ]}
              onChange={setShowPoste}
              backgroundColor={'white'}
            />
          </Box>
        </Box>

        <Box minHeight={150} backgroundColor={"fadingWhite"}>
          <TextInput
            // inputRef={inputRef}
            onChange={setTxtPoste}
            value={txtPoste}
            width={"100%"}
            borderRadius={5}
            alignSelf={"center"}
            placeholder={"Quoi de neuf................"}
            backgroundColor={'white'}

          />
          <Box flexDirection={"row"} flexWrap={"wrap"} 
            backgroundColor={'white'}
            >
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
              size={24}
              onPress={launcnCamera}
            />
            <SectionIcon
              color="black"
              iconName="picture"
              placeholder="Bibilothéque Photo et Vidéo"
              size={24}
              onPress={pickImageVideo}
            />
            <SectionIcon
              color="black"
              iconName="smileo"
              placeholder="Emoji"
              size={24}
              onPress={() => {}}
            />
            <SectionIcon
              color="black"
              iconName="gift"
              placeholder="Gif"
              size={24}
              onPress={() => {}}
            />
          </Box>
        </BottomSheet>
      </Box>
    </SafeAreaView>
  );
};

export default PosteScreens;
