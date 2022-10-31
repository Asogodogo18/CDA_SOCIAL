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

enum NotificationType {
  message,
  post,
  story,
  suggest,
  friends,
}

export type SingleNotifPreviewProps = {
  thumbnail: string;
  onPress?: () => void;
  text: string;
  timestamp: string;
  type: keyof typeof NotificationType;
};
