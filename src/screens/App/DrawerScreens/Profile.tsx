import {
  Box,
  Text,
  Post,
  Searchbar,
  SearchFilters,
  ProfileHeader,
  TabNav,
  ErrorDisplayView,
  ProfileContent,
} from "../../../components";

import { ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { PostImage, PostMultipleImages } from "../../../data/post";
import useUserController from "../../../viewController/Users/UserController";
import usePostController from "../../../viewController/Post/usePostController";
import { UserApi } from "../../../Api";
import { useUserContext } from "../../../Context";
import { SafeAreaView } from "react-native-safe-area-context";
import filterPosts from "../../../utils/filterPosts";

const Profile = ({ navigation, route }) => {
  //console.log("profile params :", route.params);
  const { user } = useUserContext();
  const { getUserFromId } = useUserController();
  const { getPostByUser } = usePostController();

  const [userProfile, setUserProfile] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState(0);
  const [postsMedia, setPostsMedia] = useState([]);
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  const switchHandler = (index) => {
    if (isActive !== index) setIsActive(index);
  };

  // //console.log("profile user ", user);

  const handleNavigation = () => {
    return navigation.navigate("HomeStack", { screen: "PostDetails" });
  };

  const loadUserData = async (id: string) => {
    setIsLoadingUser(true);
    try {
      const payload = await getUserFromId(id);
      if (payload.code === 200) {
        setUserProfile(payload.data);
        setIsLoadingUser(false);
        // setIsLoading(false);
      } else if (payload.code !== 200) {
        setError(payload?.message);
        setIsLoadingUser(false);
      }
      console.log("userData: ", payload);
    } catch (error) {
      console.log("error user data: ", error);
      setError(error);
      setIsLoading(false);
    }
    // setIsLoading(false)
  };
  const loadUserPostData = async (id: string) => {
    try {
      const payload = await getPostByUser(id);
      if (payload.status === 200) {
        console.log("prolie posts: ", payload.data);

        setPostsMedia(filterPosts.getPostsWithMedia(payload.data.posts));
        setPosts(filterPosts.getPostsWithText(payload.data.posts));
        setIsLoading(false);
      } else if (payload.status !== 200) {
        setError(payload?.message);
        setIsLoading(false);
      }
      console.log("userData: ", payload);
    } catch (error) {
      console.log("error user data: ", error);
      setError(error.toString());
      setIsLoading(false);
    }
    // setIsLoading(false)
  };

  const getProfileData = async (id) => {
    await loadUserData(id);
    await loadUserPostData(id);
  };

  useEffect(() => {
    console.log("route params: ", route.params);
    if (route.params.self !== undefined) {
      if (route.params.seff === false) {
        console.log("route params: ", route.params.userID);

        getProfileData(route.params.userID).then(() => {
          if (isLoadingUser && isLoading) setIsReady(true);
        });
      }

      getProfileData(user.id).then(() => {
        if (isLoadingUser && isLoading) setIsReady(true);
      });
    }

    return () => {
      setUserProfile(null);
      setIsLoading(true);
      setIsReady(false);
    };
  }, []);

  if (!isReady) {
    return (
      <Box
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"white"}
      >
        <ActivityIndicator size={"large"} color="green" />
      </Box>
    );
  }
  if (error) {
    return <ErrorDisplayView message={error} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignContent: "center",
          backgroundColor: "#F3F3F3",
          paddingBottom: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Box mt={"xl"}>
          <ProfileHeader 
          isOwner={userProfile.id === user.id}
          user={userProfile} />
        </Box>
        <Box my={"m"}>
          <TabNav isActive={isActive} onSwitch={switchHandler} />
        </Box>
        <Box flex={1} px={"m"}>
          {isActive == 0 ? (
            <ProfileContent data={postsMedia} />
          ) : isActive === 1 ? (
            <ProfileContent data={posts} />
          ) : (
            <ProfileContent data={likedPosts} />
          )}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
