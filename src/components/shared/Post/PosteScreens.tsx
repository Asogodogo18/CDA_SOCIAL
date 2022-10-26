
import React, { useRef } from 'react'
import { Box, Text } from '../..'
import BottomSheet from '@gorhom/bottom-sheet';
const PosteScreens = ({isActive}:any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = ["50%", "80%"];
  return (
    <Box flex={1}>
    
     
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            // onChange={handleSheetChanges}
          >
            <Box
              style={{
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
                flex:1
              }}
            >
              <Text variant={"header"}>PosteScreens</Text>
            </Box>
          </BottomSheet>
       
      
    </Box>
  )
}

export default PosteScreens