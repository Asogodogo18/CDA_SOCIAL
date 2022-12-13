import React from "react";
import Box from "../shared/Box";
import EmptyUserContent from "../shared/EmptyComponents/EmptyUserContent";
import Post from "../shared/Post/Post";

type ProfileContentProps = {
  data: any[];
};

const ProfileContent: React.FC<ProfileContentProps> = ({ data }) => {
  return (
    <Box flex={1}>
      {data === undefined || data.length === 0 ? (
        <EmptyUserContent />
      ) : (
        data.map((post, i) => (
          <Post key={`userposts-${i}`} type="main" data={post} />
        ))
      )}
    </Box>
  );
};

export default ProfileContent;
