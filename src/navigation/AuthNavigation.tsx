import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OnboardingScreen,
  AuthScreen,
  ForgotPasswordScreen,
  ProfileUpdate,
} from "../screens";

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="ProfileUpdate"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Authentification" component={AuthScreen} />
      <AuthStack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <AuthStack.Screen name="Mpo" component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
