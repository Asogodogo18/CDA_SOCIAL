import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { Video } from "expo-av";
import { MediaType } from "../../types/global";

type MediaProps = {
  media: MediaType;
  single?: boolean;
};
const Media: React.FC<MediaProps> = ({ media, single }) => {
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
        style={
          !single
            ? {
                width: 100,
                height: 100,
                overflow: "hidden",
                borderRadius: 8,
              }
            : {
                width: "100%",
                height: 250,
                overflow: "hidden",
                alignSelf: "center",
                borderRadius: 8,

              }
        }
      />
    </TouchableOpacity>
  );
};

export default Media;
