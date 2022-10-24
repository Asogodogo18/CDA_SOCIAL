import React, { useState } from "react";
import { TouchableOpacity, Switch } from "react-native";
import Box from "../shared/Box";
import Text from "../shared/Text";

enum ItemsType {
  main,
  switch,
}

type SectionItemProps = {
  icon: React.ReactNode;
  label: string;
  type: keyof typeof ItemsType;
  onPress: () => void;
};

type SectionsItemsProps = {
  title: string;
  data: SectionItemProps[];
};

const SectionsItems: React.FC<SectionsItemsProps> = ({ title, data }) => {
  return (
    <Box width={"100%"} padding={"m"} pt={"xl"}>
      <Text
        mb={"m"}
        color={"grayDark"}
        textTransform={"capitalize"}
        variant={"titleBold"}
      >
        {title}
      </Text>
      {data.map((sectionItem, index) => (
        <SectionItem key={index} {...sectionItem} />
      ))}
    </Box>
  );
};

const SectionItem: React.FC<SectionItemProps> = ({
  icon,
  label,
  type,
  onPress,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handlePress = () => {
    if (type == "switch") toggleSwitch();
    onPress();
  };
  return (
    <TouchableOpacity onPress={handlePress} style={{ width: "100%" }}>
      <Box
        width={"100%"}
        height={56}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Box flex={1} alignItems={"center"} justifyContent={"center"}>
          {icon}
        </Box>
        <Box flex={type == "main" ? 8 : 6} alignItems={"flex-start"} pl="l">
          <Text textTransform={"capitalize"} variant={"body"}>
            {label}
          </Text>
        </Box>
        {type === "switch" && (
          <Box flex={2} alignItems={"center"} justifyContent={"center"}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default SectionsItems;