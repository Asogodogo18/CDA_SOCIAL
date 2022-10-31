import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthNavigation from "./AuthNavigation";
import AppStack from "./AppStack";

const rootStack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <rootStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <rootStack.Screen name="AuthNavigation" component={AuthNavigation} />
      <rootStack.Screen name="AppStack" component={AppStack} />
    </rootStack.Navigator>
  );
};

export default RootStack;
