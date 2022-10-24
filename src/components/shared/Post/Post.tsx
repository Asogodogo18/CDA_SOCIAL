import React, { ReactNode } from "react";
import { BoxProps, TextProps } from "@shopify/restyle";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

import { MediaType } from "../../../types";
import theme, { Theme } from "../../../theme";
import Box from "../Box";
import Text from "../Text";
import Avatar from "../Avatar";
import { TouchableOpacity, View } from "react-native";
import Media from "../Media";

enum PostTypes {
  main,
  details,
  reply,
}

type PostProps = {
  data: any;
  type: keyof typeof PostTypes;
  onPress: () => void;
} & Partial<BoxProps<Theme>>;

type PostHeaderProps = {
  avatarSrc: string;
  name: string;
  username: string;
  timestamp: string;
  type: keyof typeof PostTypes;
};

type PostFooterProps = {
  commentsCount: string;
  likeCount: string;
  retweetCount: string;
  shareCount: string;
};

type PostContentProps = {
  media: MediaType[];
  body?: string;
  timestamp: string;
  type: keyof typeof PostTypes;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  name,
  avatarSrc,
  username,
  timestamp,
  type,
}) => {
  return (
    <Box
      py={"m"}
      px={"l"}
      alignItems={"center"}
      flexDirection={"row"}
      height={50}
    >
      <Avatar type="post" source={avatarSrc} />
      <Box marginLeft={"l"} alignItems={"center"}>
        <Text variant={"title"}>{name}</Text>
        <Text variant={"subtitle"}>@{username}</Text>
      </Box>
      {type !== "details" && (
        <Box marginLeft={"l"} flexDirection={"row"} alignItems={"center"}>
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
  );
};

const PostFooter: React.FC<PostFooterProps> = ({
  commentsCount,
  likeCount,
  retweetCount,
  shareCount,
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
          <EvilIcons name="comment" size={20} color={theme.colors.grayDark} />
          <Text variant={"caption"}>{commentsCount}</Text>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity>
        <Box flexDirection={"row"} alignItems={"center"}>
          <Ionicons
            name="heart-outline"
            size={16}
            color={theme.colors.grayDark}
          />
          <Text variant={"caption"}>{likeCount}</Text>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity>
        <Box flexDirection={"row"} alignItems={"center"}>
          <EvilIcons name="retweet" size={20} color={theme.colors.grayDark} />
          <Text variant={"caption"}>{retweetCount}</Text>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity>
        <Box flexDirection={"row"} alignItems={"center"}>
          <Ionicons
            name="share-outline"
            size={16}
            color={theme.colors.grayDark}
          />
          <Text variant={"caption"}>{shareCount}</Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const PostContent: React.FC<PostContentProps> = ({
  type,
  media,
  body,
  timestamp,
}) => {
  return (
    <Box flexGrow={1}>
      {type === "reply" && (
        <Text fontSize={12} variant={"caption"}>
          En réponse{" "}
        </Text>
      )}

      {media.length === 0 ? null : media.length <= 1 ? (
        <Media single={true} media={media[0]} />
      ) : (
        <Box flexGrow={1} flexDirection={"row"} flexWrap={"wrap"}>
          {media?.map((item, index) => (
            <Media key={`media_no-${index}`} media={item} />
          ))}
        </Box>
      )}

      <Text variant="body1">{body}</Text>
      {type === "details" && <Text variant={"caption"}>{timestamp}</Text>}
    </Box>
  );
};

const Post: React.FC<PostProps> = ({ data, type, onPress, ...props }) => {
  const { userDetails, media, text, footer } = data;
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
      <TouchableOpacity onPress={onPress}>
        <PostHeader type={type} {...userDetails} />
        <PostContent
          type={type}
          media={media}
          body={text}
          timestamp={userDetails.timestamp}
        />
        <PostFooter {...footer} />
      </TouchableOpacity>
    </Box>
  );
};

export default Post;
