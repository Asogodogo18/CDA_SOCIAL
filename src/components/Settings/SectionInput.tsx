import React, { useState } from "react";
import { TouchableOpacity, TextInput } from "react-native";
import Box from "../shared/Box";
import Text from "../shared/Text";


type SectionItemProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
};

type SectionsItemsProps = {
  title: string;
  data: SectionItemProps[];
};

const SectionsItems: React.FC<SectionsItemsProps> = ({ title, data }) => {
  return (
    <Box width={"100%"} padding={"m"}>
      <Text
        mb={"m"}
        color={"grayDark"}
        textTransform={"capitalize"}
        variant={"title"}
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
  label,
  value,
  onChange,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handlePress = () => {
    toggleSwitch();
  };
  return (
    <TouchableOpacity onPress={handlePress} style={{ width: "100%" }}>
      <Box width={"100%"} height={56} flexDirection={"column"}>
        <Box alignItems={"flex-start"} pl="l">
          <Text textTransform={"capitalize"} variant={"body"}>
            {label}
          </Text>
        </Box>
        <Box width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <TextInput
            editable={isEnabled}
            style={{ paddingLeft: 15, width: "100%", height: 26 }}
            value={value}
            onChangeText={onChange}
          />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default SectionsItems;
