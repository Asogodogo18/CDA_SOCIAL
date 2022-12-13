import { TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import Box from "../shared/Box";
import Avatar from "../shared/Avatar";
import Text from "../shared/Text";
import { formatDate } from "../../utils";

type HeaderProps = {
  user?: {};
  isOwner: boolean;
};

type ProfileNavProps = {
  name: string;
  username: string;
  onPress: () => void;
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

const Navbar: React.FC<ProfileNavProps> = ({ name, username, onPress }) => {
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
        onPress={onPress}
        style={{
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          elevation: 4,
        }}
      >
        <AntDesign name="left" size={28} color="white" />
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

type BannerProps = {
  postsCount: string;
  followCount: string;
  followingCount: string;
  userBio: string;
  country: string;
  city: string;
  memberSince: string;
  isOwner: boolean;
};

const Banner: React.FC<BannerProps> = ({
  postsCount,
  followCount,
  followingCount,
  userBio,
  country,
  city,
  memberSince,
  isOwner,
}) => {
  return (
    <Box
      position={"absolute"}
      left={0}
      right={5}
      bottom={0}
      backgroundColor={"nobg"}
      flexDirection={"row"}
      minHeight={120}
      maxHeight={130}
      alignItems={"center"}
    >
      <Box flex={3} justifyContent={"center"} alignItems={"center"}>
        <Avatar
          type="floating"
          source={{
            uri: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
          }}
        />
      </Box>
      <Box alignItems={"flex-start"} flex={7} justifyContent={"space-around"}>
        <Box
          width={"98%"}
          height={30}
          mb={"s"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Action count={postsCount} title="Postes" />
          <Action count={followCount} title="Abonnés" />
          <Action count={followingCount} title="Abonnemet" />
        </Box>
        <Text textAlign={"left"} mb={"s"} variant={"subtitleLightWhite"}>
          {userBio}
        </Text>
        <Box
          width={"100%"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          {isOwner ? null : (
            <UserInfoContainer>
              <TouchableOpacity >
                <SimpleLineIcons name="user-follow" size={18} color="green" />
              </TouchableOpacity>
              <Box width={1} height={12} backgroundColor={"gray"} />
              <TouchableOpacity>
                <AntDesign name="message1" size={18} color="green" />
              </TouchableOpacity>
            </UserInfoContainer>
          )}
          <UserInfoContainer>
            <Entypo name="location" size={18} color="green" />
            <Box ml={"s"}>
              <Text variant={"caption"} fontSize={8}>
                {city}
              </Text>
              <Text variant={"btnTextInactive"} fontSize={9} fontWeight={"500"}>
                {country}
              </Text>
            </Box>
          </UserInfoContainer>
          <UserInfoContainer>
            <AntDesign name="calendar" size={18} color="green" />
            <Box ml={"s"} px={"s"}>
              <Text variant={"caption"} fontSize={8}>
                Membre Depuis
              </Text>
              <Text variant={"btnTextInactive"} fontSize={9} fontWeight={"500"}>
                {memberSince}
              </Text>
            </Box>
          </UserInfoContainer>
        </Box>
      </Box>
    </Box>
  );
};
const Header: React.FC<HeaderProps> = ({ user, isOwner }) => {
  const Navigation = useNavigation();

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
          uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-aew-013_1_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2724bd9481a065ee24e7e7eaaabf1c55",
        }}
      >
        <Navbar
          name={`${user?.first_name}  ${user?.last_name}`}
          username={user?.user_name}
          onPress={() => Navigation.goBack()}
        />
        <Banner
          isOwner={isOwner}
          country={user?.country}
          city={user?.city || ""}
          userBio={user?.about_you}
          postsCount={user["post_count"]}
          memberSince={formatDate(user["member_since"])}
          followCount={user?.followers?.total}
          followingCount={user?.following?.total}
        />
      </ImageBackground>
    </Box>
  );
};

const UserInfoContainer = (props) => {
  return (
    <Box
      height={30}
      minWidth={70}
      maxWidth={120}
      mx={"s"}
      px={"s"}
      py={"s"}
      backgroundColor={"white"}
      flexDirection={"row"}
      borderRadius={20}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      {props.children}
    </Box>
  );
};

export default Header;
