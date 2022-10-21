import React from "react";
import Box from "../shared/Box";
import { MediaType } from "../../types";
import Text from "../shared/Text";
import Media from "../shared/Media";

type MessageProps = {
  message: {
    text: string;
    media: MediaType[];
    timestamp: string;
  };
  self: boolean;
};

const Message: React.FC<MessageProps> = ({ message, self }) => {
  return (
    <Box margin={"m"} alignSelf={self ? "flex-end" : "flex-start"}>
      <Box
        backgroundColor={self ? "messageOutBG" : "messageInBg"}
        borderRadius={5}
        maxWidth={200}
        padding={"m"}
      >
        {message?.media.length === 0 ? null : message?.media.length <= 1 ? (
          <Media media={message.media[0]} />
        ) : (
          <Box flexGrow={1} flexDirection={"row"} flexWrap={"wrap"}>
            {message.media?.map((item, index) => (
              <Media key={`media_no-${index}`} media={item} />
            ))}
          </Box>
        )}
        <Text variant={"body2"}>{message.text}</Text>
      </Box>
      <Box position={"relative"} top={0} left={15}>
        <Text fontSize={8} variant={"caption"}>
          {message.timestamp}
        </Text>
      </Box>
    </Box>
  );
};

export default Message;
