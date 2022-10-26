import { Button, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Banner,
  Box,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  StepsIndicator,
  Text,
} from "../../components";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");
const ProfileUpdate = () => {
  const [active, setActive] = useState(0);
  const [image, setImage] = useState(null);

  const handleNext = () => {
    setActive(active + 1);
  };

  const handlePrev = () => {
    setActive(active - 1);
  };

  const handleImagechange = (image) => {
    setImage(image);
  };

  const STEPS = [
    {
      subtitle: "Ajouter une image de profil",
      component: <Step1 image={image} onPress={handleImagechange} />,
    },
    { subtitle: "Information Personelle", component: <Step2 /> },
    { subtitle: "A propos de vous", component: <Step3 /> },
    { subtitle: "Localisation", component: <Step4 /> },
    { subtitle: "Confidentialité", component: <Step5 /> },
  ];
  return (
    <LinearGradient
      style={{ flex: 1, paddingTop: 50, justifyContent: "center" }}
      colors={["#AAFFA9", "#11FFBD"]}
    >
      <Banner
        py={"l"}
        mt={"xl"}
        subTitle={STEPS[active].subtitle}
        step={active + 1}
      />
      <Box position={"absolute"} top={0} bottom={0} left={0}>
        <StepsIndicator activeIndex={active} />
      </Box>
      <Box ml={"xxxl"} pl={"xl"} flex={1}>
        {STEPS[active].component}
      </Box>
      <Box width={"100%"} flex={0.25} flexDirection={"row"}>
        {!active <= 0 && (
          <TouchableOpacity
            onPress={handlePrev}
            style={{ position: "absolute", left: 10, alignSelf: "center" }}
          >
            <Box flexDirection={"row"} alignItems={"center"}>
              <Ionicons name="md-chevron-back" size={50} color="white" />
              <Text variant={"btnText2"}>Retour</Text>
            </Box>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={handleNext}
          style={{ position: "absolute", right: 10, alignSelf: "center" }}
          disabled={active >= STEPS.length - 1}
        >
          <Box flexDirection={"row"} alignItems={"center"}>
            <Text variant={"btnText2"}>Suivant</Text>
            <Ionicons name="chevron-forward-outline" size={50} color="white" />
          </Box>
        </TouchableOpacity>
      </Box>
    </LinearGradient>
  );
};

export default ProfileUpdate;
