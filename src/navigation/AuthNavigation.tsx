import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OnboardingScreen,
  AuthScreen,
  ForgotPasswordScreen,
  ProfileUpdate,
} from "../screens";
import { AuthProvider } from "../Context";

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthProvider>
      <AuthStack.Navigator
        initialRouteName="Authentification"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AuthStack.Screen name="Authentification" component={AuthScreen} />
        <AuthStack.Screen name="ProfileUpdate" component={ProfileUpdate} />
        <AuthStack.Screen name="Mpo" component={ForgotPasswordScreen} />
      </AuthStack.Navigator>
    </AuthProvider>
  );
};

export default AuthNavigation;
