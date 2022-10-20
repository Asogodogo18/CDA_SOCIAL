
import React from 'react'
import {
    Box,
    Searchbar,
    Text,
    SwitchControl,
    Stories,
    MessageListing,
    Post,
  } from "../../../components";

export default function PostDetails({route}) {
  // const {data}=route.param
  console.log(route.param);
  
  return (
    <Box flex={1} justifyContent={'center'} alignItems={"center"}>
      
      <Text variant={"subheader"} >PostDetails</Text>
      {/* <Post data={data} onPress={()=>{}} /> */}

    </Box>
  )
}