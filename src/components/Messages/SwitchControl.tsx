import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Box from "../shared/Box";
import Text from "../shared/Text";

type SwitchControlProps = {};

type ControlProps = {
  isActive: boolean;
  label: string;
  handleSwicth: () => void;
};
const SwitchControl: React.FC<SwitchControlProps> = () => {
  const [isActive, setisActive] = useState(0);

  const onSwitch = () => {
    setisActive(isActive == 1 ? 0 : 1);
  };

  return (
    <Box
      height={40}
      borderRadius={10}
      backgroundColor={"white"}
      mx={"xl"}
      px={"s"}
      elevation={4}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <Control
        label={"Conversations"}
        isActive={isActive === 0 ? true : false}
        handleSwicth={onSwitch}
      />
      <Control
        label={"Groupes"}
        isActive={isActive === 1 ? true : false}
        handleSwicth={onSwitch}
      />
    </Box>
  );
};

const Control: React.FC<ControlProps> = ({ isActive, label, handleSwicth }) => (
  <Box
    height={25}
    backgroundColor={isActive ? "borderColor1" : "nobg"}
    borderRadius={5}
    px={'m'}
  >
    <TouchableOpacity
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handleSwicth}
    >
      <Text variant={isActive ? "btnTextActive" : "btnTextInactive"}>
        {label}
      </Text>
    </TouchableOpacity>
  </Box>
);

export default SwitchControl;
