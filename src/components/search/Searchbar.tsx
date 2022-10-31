import { View, Text, TextInput } from "react-native";
import React from "react";

import SearchbarIcon from "../../../assets/icons/search_icon.svg";
import Box from "../shared/Box";

type SearchbarProps = {
  placeholder: string;
  value: string;
  onChange: (param: string) => void;
};
const Searchbar: React.FC<SearchbarProps> = ({
  onChange,
  placeholder = "Recherche",
  value,
}) => {
  return (
    <Box
      width={"100%"}
      height={40}
      flexDirection={"row"}
      px={"m"}
      py={"s"}
      alignItems={"center"}
      borderBottomWidth={1}
      borderBottomColor={"borderColor1"}
    >
      <SearchbarIcon />
      <TextInput
        style={{ marginLeft: 4 }}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </Box>
  );
};

export default Searchbar;
