import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { Video } from "expo-av";
import { MediaType } from "../../types";

type MediaProps = {
  media: MediaType;
};
const Media: React.FC<MediaProps> = ({ media }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  console.log("media: ", media);

  if (media.type === "video")
    return (
      <TouchableOpacity style={{ margin: 2 }}>
        <Video
          ref={video}
          style={{ margin: 5, width: 300, height: 150 }}
          resizeMode={"contain"}
          source={{
            uri: media.url,
          }}
          useNativeControls
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity style={{ margin: 2 }}>
      <Image
        source={{ uri: media.url }}
        resizeMode="contain"
        style={{
          width: 80,
          height: 80,
          overflow: "hidden",
          borderRadius:8
        }}
      />
    </TouchableOpacity>
  );
};

export default Media;
