enum typeMedia {
    image,
    video,
  }
  
 export type MediaType = {
    url: string;
    type: keyof typeof typeMedia;
  };
  
export type SingleMessagePreviewProps = {
  thumbnail: string;
  name: string;
  lastMessage: { text: string; timestamp: string; unread: boolean };
  onPress?: () => void;
};