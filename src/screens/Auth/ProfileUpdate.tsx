import { Button, View } from "react-native";
import React, { useState } from "react";
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


const ProfileUpdate = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive(active + 1);
  };

  const handlePrev = () => {
    setActive(active - 1);
  };

  const STEPS = [
    { subtitle: "Ajouter une image de profil", component: <Step1 /> },
    { subtitle: "Information Personelle", component: <Step2 /> },
    { subtitle: "A propos de vous", component: <Step3 /> },
    { subtitle: "Localisation", component: <Step4 /> },
    { subtitle: "Confidentialité", component: <Step5 /> },
  ];
  return (
    <LinearGradient
      style={{ flex: 1, paddingTop: 90 }}
      colors={["#EFF9FB", "#77FFD9"]}
    >
      <Banner
        py={"l"}
        mt={"xl"}
        subTitle={STEPS[active].subtitle}
        step={active + 1}
      />
      <Box flex={1} ml={"xl"}>
        <StepsIndicator activeIndex={active} />
        {STEPS[active].component}
      </Box>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <Button
          title="prev"
          onPress={handlePrev}
          disabled={active <= 0}
        />
        <Button
          title="next"
          onPress={handleNext}
          disabled={active >= STEPS.length - 1}
        />
      </View>
    </LinearGradient>
  );
};

export default ProfileUpdate;
