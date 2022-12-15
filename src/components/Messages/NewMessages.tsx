import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Avatar from "../shared/Avatar";
import Box from "../shared/Box";
import Text from "../shared/Text";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;


const Pill = () => {
  return (
    <Box
      backgroundColor={"borderColor1"}
      borderRadius={10}
      width={10}
      height={10}
      position={"relative"}
      right={15}
      top={25}
    />
  );
};

const NewMessage = ({ data, onPress, isLoading }) => {
  console.log("search result item : ", data);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center", margin: 8 }}
    >
    
      {isLoading ? (
        <Box
          justifyContent={"space-around"}
          flexDirection={"row"}
          alignItems={"center"}
          marginLeft={"ml"}
          // padding={'l'}
        >
          <Skeleton colorMode={"light"} width={40} height={40} radius={8} />
          <Box marginLeft={"l"} >
            <Skeleton colorMode={"light"} width={150} height={15} />
            <Spacer height={5} />

            <Skeleton colorMode={"light"} width={110} height={15} />
          </Box>
        </Box>
      ) : (
        <>
        <Avatar type="header" source={{ uri: data?.avatar }} />
        {/* <Image
            source={}
            style={{ height: 60, width: 60, borderRadius: 50 }}
            resizeMode="cover"
          /> */}
        {data?.isnect && <Pill />}
        <Box marginLeft={"ml"}>
          <Text variant={"title"}>
            {data?.fname} {data?.lname}
          </Text>
          <Text variant={"caption"}>{data?.username}</Text>
        </Box>
        </>
      )}
    </TouchableOpacity>
  );
};

export default NewMessage;
