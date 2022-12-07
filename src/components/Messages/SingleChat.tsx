import { Image, TouchableOpacity } from "react-native";
import React from "react";
import SkeletonContent from "react-native-skeleton-content";
import _ from "lodash";
import Box from "../shared/Box";
import Text from "../shared/Text";
import { SingleChatProps } from "../../types/global";
import { useNavigation } from "@react-navigation/native";
import useChatController from "../../viewController/Messages/ChatController";
import ErrorDisplayView from "../shared/ErrorDisplayView";
import Loader from "../shared/Loader";
import Avatar from "../shared/Avatar";

const SingleChat: React.FC<SingleChatProps> = ({ chatId }) => {
  const navigation = useNavigation();

  const { getSingleChatById } = useChatController();
  const {
    isLoading,
    isFetching,
    isError,
    isSuccess,
    isUninitialized,
    data,
    error,
  } = getSingleChatById(chatId);

  const handlePress = () => {
    navigation.navigate("Accueil", { screen: "Chats", params: { chatId } });
  };
  // console.log("data chat :", data);

  if (isLoading || isFetching || isUninitialized) {
    return <Loader message="En cours de chargement, Veuillez Patienter" />;
  }

  if (isError || [isSuccess, data?.code !== 200].every(Boolean)) {
    return (
      <ErrorDisplayView message={isError ? error?.error : data?.message} />
    );
  }

  if ([isSuccess, data?.code === 200, data?.chat == undefined].every(Boolean)) {
    return (
      <ErrorDisplayView
        message={
          "Vous n'avez aucun message en ce moment, Veuillez démarrer une conversation"
        }
      />
    );
  }
  // console.log(
  //   "messages: ",
  //   data.chat.messages.data[data.chat.messages.data.length - 1]
  // );

  return (
    <Box
      flexDirection={"row"}
      height={75}
      width={"100%"}
      backgroundColor={"white"}
      alignItems={"center"}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={{ flexDirection: "row", flex: 1 }}
      >
        <Box flex={2} justifyContent={"center"} alignItems={"center"}>
          {/* <Image
            source={{ uri: thumbnail }}
            resizeMode="cover"
            style={{
              width: 60,
              height: 60,
              borderRadius: 8,
              overflow: "hidden",
            }}
          /> */}
          <Avatar type="menu" source={{ uri: data.chat["user_two"].avatar }} />
        </Box>
        <Box flex={6} ml={"l"} py={"m"} justifyContent={"space-around"}>
          <Text variant={"title1"}>
            {data.chat["user_two"].fname} {data?.chat["user_two"].lname}
          </Text>
          <Text variant={"caption"}>
            {
              data.chat.messages.data[data.chat.messages.data.length - 1][
                "message"
              ]
            }
          </Text>
        </Box>
        <Box
          flex={2}
          py={"m"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {Boolean(
            Number(
              data.chat.messages.data[data.chat.messages.data.length - 1][
                "seen"
              ]
            )
          ) && <Pill />}
          <Text variant={"caption"}>
            {/* {_.last(data?.chat?.messages.data).message.time} */}
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default SingleChat;

const Pill = () => {
  return (
    <Box
      backgroundColor={"borderColor1"}
      borderRadius={10}
      width={10}
      height={10}
    />
  );
};
