import React, { ReactNode, useEffect, useRef, useState } from "react";
import { BoxProps, TextProps } from "@shopify/restyle";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

import { joinReplys } from "../../../utils";
import theme, { Theme } from "../../../theme";
import Box from "../Box";
import Text from "../Text";
import Avatar from "../Avatar";
import {
  Animated,
  Button,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  View,
  PanResponder,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import Media from "../Media";
import { MediaType } from "../../../types/global";
import useUserController from "../../../viewController/Users/UserController";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

enum PostTypes {
  main,
  details,
  reply,
}

type PostProps = {
  data: any;
  type: keyof typeof PostTypes;
  onPress?: () => void;
} & Partial<BoxProps<Theme>>;

type PostHeaderProps = {
  avatarSrc: string;
  name: string;
  username: string;
  timestamp: string;
  onAvatarPress: () => void;
  type: keyof typeof PostTypes;
};

type PostFooterProps = {
  replys_count: string;
  likes_count: string;
  repost_count: string;
  shareCount?: string;
};

type PostContentProps = {
  media: MediaType[];
  body?: string;
  timestamp: string;
  replyTo?: [];
  type: keyof typeof PostTypes;
  toggleModal: Function;
  setCurrentMedia: React.Dispatch<React.SetStateAction<null>>;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  name,
  avatarSrc,
  username,
  timestamp,
  type,
  onAvatarPress,
}) => {
  return (
    <Box
      py={"m"}
      px={"l"}
      alignItems={"center"}
      flexDirection={"row"}
      height={60}
    >
      <Avatar
        onPress={onAvatarPress}
        type="header"
        source={{ uri: avatarSrc }}
      />
      <Box marginLeft={"l"} alignItems={"flex-start"}>
        <Box
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Text variant={"title"}>{name}</Text>
          <Text ml={"s"} variant={"subtitle"}>
            @{username}
          </Text>
        </Box>

        {type !== "details" && (
          <Box flexDirection={"row"} alignItems={"center"}>
            <Box
              width={4}
              height={4}
              borderRadius={4}
              backgroundColor={"grayDark"}
            />
            <Text marginLeft={"s"} variant={"caption"}>
              {timestamp}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const PostFooter: React.FC<PostFooterProps> = ({
  replys_count,
  likes_count,
  repost_count,
  shareCount = 0,
}) => {
  return (
    <Box
      alignItems={"center"}
      justifyContent={"space-around"}
      flexDirection={"row"}
      height={25}
    >
      <TouchableOpacity>
        <Box flexDirection={"row"} alignItems={"center"}>
          <EvilIcons name="comment" size={24} color={theme.colors.grayDark} />
          <Text fontSize={11} variant={"caption"}>
            {replys_count}
          </Text>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity>
        <Box flexDirection={"row"} alignItems={"center"}>
          <Ionicons
            name="heart-outline"
            size={20}
            color={theme.colors.grayDark}
          />
          <Text fontSize={11} variant={"caption"}>
            {likes_count}
          </Text>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity>
        <Box flexDirection={"row"} alignItems={"center"}>
          <EvilIcons name="retweet" size={24} color={theme.colors.grayDark} />
          <Text fontSize={11} variant={"caption"}>
            {repost_count}
          </Text>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity>
        <Box flexDirection={"row"} alignItems={"center"}>
          <Ionicons
            name="share-outline"
            size={18}
            color={theme.colors.grayDark}
          />
          <Text fontSize={11} variant={"caption"}>
            {shareCount}
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const PostContent: React.FC<PostContentProps> = ({
  type,
  media,
  body,
  replyTo,
  timestamp,
  toggleModal,
  setCurrentMedia,
}) => {
  return (
    <Box flex={1} width={"100%"} px={"l"}>
      {type === "reply" && (
        <Text fontSize={12} variant={"caption"}>
          En réponse à {joinReplys(replyTo)}
        </Text>
      )}

      {media.length === 0 ? null : media.length <= 1 ? (
        <Media
          setCurrentMedia={setCurrentMedia}
          toggleModal={toggleModal}
          single={true}
          media={media[0]}
        />
      ) : (
        <Box flex={1} flexDirection={"row"} flexWrap={"wrap"}>
          {media?.map((item, index) => (
            <Media
              setCurrentMedia={setCurrentMedia}
              toggleModal={toggleModal}
              key={`media_no-${index}`}
              media={item}
            />
          ))}
        </Box>
      )}

      <Text mt={"s"} variant="body1">
        {body}
      </Text>
      {type === "details" && <Text variant={"caption"}>{timestamp}</Text>}
    </Box>
  );
};

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Post: React.FC<PostProps> = ({ data, type, onPress, ...props }) => {
  const { id, user_id, media, text, replys_count, likes_count, reposts_count } =
    data;
  const { isLoading, user, getPostUser, error } = useUserController();
  const [layoutData, setData] = useState(null);
  const [currentMedia, setCurrentMedia] = useState(null);

  const navigation = useNavigation();
  // console.log('Post data : ',data);

  // console.log("media : ", media);

  // console.log('post user : ',user_id);

  const handleNavigation = (id) => {
    navigation.navigate("Accueil", {
      screen: "Publication",
      params: { postId: id },
    });
  };

  const onAvatarPress = () => {
    navigation.navigate("Profile", { userID: user_id, self: false });
  };
  useEffect(() => {
    getPostUser(user_id);
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <ActivityIndicator size={"large"} color="green" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        my={"s"}
        px={"s"}
        backgroundColor="white"
        alignItems={"center"}
        flexDirection={"row"}
        minWidth={300}
        {...props}
      >
        <Text color={"danger"} variant={"body2"}>
          {error}
        </Text>
      </Box>
    );
  }
  return (
    <Box
      my={"s"}
      px={"s"}
      backgroundColor="white"
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      minHeight={100}
      {...props}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ width: "100%" }}
        onPress={() => handleNavigation(id)}
      >
        <PostHeader
          type={type}
          onAvatarPress={onAvatarPress}
          avatarSrc={user.avatar}
          name={`${user.firstName} ${user.lastName}`}
          username={user.username}
          timestamp={data.time}
        />
        <PostContent
          type={type}
          media={media}
          replyTo={type == "reply" ? data.reply_to : null}
          body={text}
          timestamp={data.time}
          toggleModal={(data: any) => setData(data)}
          setCurrentMedia={setCurrentMedia}
        />
        <PostFooter
          likes_count={likes_count}
          repost_count={reposts_count}
          replys_count={replys_count}
        />
      </TouchableOpacity>

      {layoutData !== null && (
        <ModalView
          layoutData={layoutData}
          currentMedia={currentMedia}
          close={() => {
            setData(null);
            setCurrentMedia(null);
          }}
        />
      )}
    </Box>
  );
};

function ModalView({ layoutData, close, currentMedia }) {
  const { x, y, _width, _height } = layoutData;
  const animtion = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [expanded, setExpanded] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setExpanded(true);
    }, 10);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);
  }, []);
  const onRequestClose = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        150,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity
      ),
      () => {
        close();
      }
    );
    setExpanded(false);
  };
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: Animated.event([null, { dy: animtion.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, g) => {
        if (Math.abs(g.vy) > 2) {
          reset(true, g.vy > 0);
          return;
        }
        reset();
      },
      onPanResponderTerminate: () => {
        reset();
      },
    })
  ).current;
  const reset = (closeModal, down) => {
    Animated.spring(animtion, {
      toValue: { x: 0, y: closeModal ? height * (down ? 1 : -1) : 0 },
      bounciness: 0,
      useNativeDriver: true,
    }).start();
    if (closeModal) {
      setTimeout(() => {
        close();
      }, 200);
    }
  };
  return (
    <Modal visible onRequestClose={onRequestClose} transparent>
      <View style={[styles.center]} {...panResponder.panHandlers}>
        {expanded && (
          <Animated.View
            style={[StyleSheet.absoluteFill, { backgroundColor: "#000000aa" }]}
          />
        )}
        <Animated.View
          style={[
            expanded
              ? {
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {
                  height: _height,
                  width: _width,
                  left: x,
                  top: y,
                  position: "absolute",
                },
            {
              backgroundColor: "#000",
              overflow: "hidden",
              transform: animtion.getTranslateTransform(),
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Media single={true} media={currentMedia} expanded={true} />
          {expanded && (
            <View style={styles.close}>
              <Button title="Fermer" onPress={onRequestClose} />
            </View>
          )}
          {isPopupVisible && (
            <Text
              style={[
                styles.label,
                {
                  textAlign: "center",
                  position: "absolute",
                  bottom: height / 6,
                },
              ]}
            >
              Glisser vers le haut ou le bas pour fermer
            </Text>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
}

export default Post;

const styles = StyleSheet.create({
  item: {
    height: width / 2,
    flex: 1,
    padding: 3,
  },
  close: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  label: {
    color: "#fff",
    fontSize: 20,
    marginTop: 100,
  },
});
