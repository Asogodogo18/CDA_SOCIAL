import { TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
// import { useNavigation } from '@react-navigation/native';
import { AntDesign, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import Box from "../shared/Box";
import Avatar from "../shared/Avatar";
import Text from "../shared/Text";

type HeaderProps = {
  user: string;
};

type ProfileNavProps = {
  name: string;
  username: string;
};

type ActionProps = {
  count: string;
  title: string;
};

const Action: React.FC<ActionProps> = ({ count, title }) => {
  return (
    <Box mr={"m"} alignItems={"flex-start"} justifyContent="space-around">
      <Text color={"white"} variant={"titleBold"}>
        {count}
      </Text>
      <Text variant={"subtitleLightWhite"}>{title}</Text>
    </Box>
  );
};

const Navbar: React.FC<ProfileNavProps> = ({ name, username }) => {
  // const Navigation = useNavigation ()
  return (
    <Box
      position={"absolute"}
      top={10}
      left={0}
      flexDirection={"row"}
      backgroundColor={"nobg"}
      width={"100%"}
      px={"m"}
      height={50}
      alignItems={"center"}
    >
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          elevation: 4,
        }}
      >
        <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>
      <Box position={"absolute"} left={0} right={0} alignItems={"center"}>
        <Text color={"white"} variant={"body"}>
          {name}
        </Text>
        <Text variant={"subtitle"}>@{username}</Text>
      </Box>
    </Box>
  );
};

const Banner = () => {
  return (
    <Box
      position={"absolute"}
      left={0}
      right={20}
      bottom={0}
      backgroundColor={"nobg"}
      flexDirection={"row"}
      minHeight={110}
      maxHeight={115}
      alignItems={"center"}
    >
      <Box flex={3} justifyContent={"center"} alignItems={"center"}>
        <Avatar
          type="profile"
          source={{
            uri:
              "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
          }}
        />
      </Box>
      <Box alignItems={"center"} flex={7} justifyContent={"space-around"}>
        <Box
          width={"98%"}
          height={30}
          mb={"s"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Action count="25" title="Postes" />
          <Action count="1500" title="Abonnés" />
          <Action count="3265" title="Abonnemet" />
        </Box>
        <Text textAlign={"left"} mb={"s"} variant={"body6"}>
          Nullam quis imperdiet augue. Vestibulum auctor ornare .augue.
          Vestibulum auctor ornare
        </Text>
        <Box
          width={"100%"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <UserInfoContainer>
            <SimpleLineIcons name="user-follow" size={10} color="green" />
            <Box width={1} height={12} backgroundColor={"gray"} />
            <AntDesign name="message1" size={10} color="green" />
          </UserInfoContainer>
          <UserInfoContainer>
            <Entypo name="location" size={10} color="green" />
            <Box ml={"s"}>
              <Text variant={"caption"} fontSize={6}>
                Bamako
              </Text>
              <Text variant={"btnTextInactive"} fontSize={8} fontWeight={"500"}>
                Mali
              </Text>
            </Box>
          </UserInfoContainer>
          <UserInfoContainer>
            <AntDesign name="calendar" size={10} color="green" />
            <Box ml={"s"}>
              <Text variant={"caption"} fontSize={6}>
                Membre Depuis
              </Text>
              <Text variant={"btnTextInactive"} fontSize={7} fontWeight={"500"}>
                Novembre 2020
              </Text>
            </Box>
          </UserInfoContainer>
        </Box>
      </Box>
    </Box>
  );
};
const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <Box overflow={"hidden"} minHeight={237} maxHeight={250} elevation={5}>
      <ImageBackground
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          overflow: "hidden",
        }}
        source={{
          uri:
            "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-aew-013_1_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2724bd9481a065ee24e7e7eaaabf1c55",
        }}
      >
        <Navbar name={"Jhon Doe"} username={"Zifu_D0"} />
        <Banner />
      </ImageBackground>
    </Box>
  );
};

const UserInfoContainer = (props) => {
  return (
    <Box
      height={22}
      minWidth={55}
      maxWidth={95}
      px={"s"}
      py={"s"}
      backgroundColor={"white"}
      flexDirection={"row"}
      borderRadius={10}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      {props.children}
    </Box>
  );
};

export default Header;
