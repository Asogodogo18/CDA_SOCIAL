import React, { useReducer } from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { View, Text, StyleSheet } from "react-native";

import { Skeleton } from "moti/skeleton";
import { MotiView } from "moti";
import useSWR from "swr";
import Box from "../Box";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

const FeedSkeleton = () => {
  const colorMode = "light";
  return (
    <MotiView
      transition={{
        type: "spring",
      }}
      // style={[styles.container, styles.padded]}
      animate={{ backgroundColor: "#ffffff" }}
    >
      <Box flex={1} justifyContent={"center"} alignContent={"center"} p={"l"}>
        {/* <ActivityIndicator size={"large"} color="green" /> */}
        <Box
          justifyContent={"space-between"}
          flexDirection={"row"}
          alignItems={"center"}
          // padding={'l'}
        >
          <Skeleton colorMode={"light"} width={70} height={70} radius="round" />
          <Box marginRight={"xxxl"} mb={"xl"}>
            <Skeleton colorMode={"light"} width={150} height={15} />
            <Spacer height={5} />

            <Skeleton colorMode={"light"} width={125} height={15} />
          </Box>
          <Skeleton colorMode={"light"} width={20} />

          <Spacer />
        </Box>
        <Box alignSelf={"center"} alignItems={"center"} mt={"xl"}>
          <Skeleton colorMode={"light"} width={"95%"} height={170} />
        </Box>
        <Box marginLeft={"ml"}>
          <Spacer height={6} />
          <Skeleton colorMode={"light"} width={"80%"} height={15} radius={5} />
          <Spacer height={2} />

          <Skeleton colorMode={"light"} width={"70%"} height={15} radius={5} />
          <Spacer height={2} />

          <Skeleton colorMode={"light"} width={"60%"} height={15} radius={5} />
        </Box>

        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          m={"l"}
          mt={"l"}
          py={"l"}
        >
          <Skeleton colorMode={"light"} width={80} height={30} radius="round" />

          <Skeleton colorMode={"light"} width={80} height={30} radius="round" />
          <Skeleton colorMode={"light"} width={80} height={30} radius="round" />
        </Box>
      </Box>
    </MotiView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
  },
  padded: {
    padding: 10,
  },
});

export default FeedSkeleton;
