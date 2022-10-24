import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useDrawerProgress,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

import { CustomDrawerContent } from "../components";
import Layout from "../screens/Layout";
//Details Screens
import PostDetails from "../screens/App/Details/PostDetails";
//Chats Screens
import Chats from "../screens/App/Messages/Chats";
import {
  Education,
  Favorite,
  Home,
  Messages,
  Notifications,
  Profile,
  Search,
  Tools,
  Topics,
  Parametre
} from "../screens";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Publication" component={PostDetails} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};
const StackChats = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Chats" component={Chats} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#EFF9FB", "#77FFD9"]}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          headerBackground: () => <View style={styles.transparentHeader} />,
          drawerType: "back",
          overlayColor: "transparent",
          drawerStyle: styles.drawerStyles,
          drawerActiveBackgroundColor: "lightgreen",
          drawerActiveTintColor: "purple",
          drawerContentContainerStyle: styles.container,
          sceneContainerStyle: styles.scene,
        }}
      >
        <Drawer.Screen
          name="Accueil"
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        />

        <Drawer.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={Profile}
        />
        <Drawer.Screen
          name="Education"
          options={{ headerShown: false }}
          component={Education}
        />
        <Drawer.Screen
          name="Tools"
          options={{ headerShown: false }}
          component={Tools}
        />
        <Drawer.Screen
          name="Favoris"
          options={{ headerShown: false }}
          component={Favorite}
        />
        <Drawer.Screen
          name="Topics"
          options={{ headerShown: false }}
          component={Topics}
        />
         <Drawer.Screen
          name="Parametre"
          options={{ headerShown: false }}
          component={Parametre}
        />
      </Drawer.Navigator>
    </LinearGradient>
  );
};

export default AppStack;

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Layout>
      <BottomTab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ headerShown: false }}
      >
        <BottomTab.Screen
          name="HomeStack"
          component={StackApp}
          options={{ tabBarLabel: "Home" }}
        />
        <BottomTab.Screen name="Search" component={Search} />
        <BottomTab.Screen name="StackChats" component={StackChats}  options={{ tabBarLabel: "Messages" }} />
        <BottomTab.Screen name="Notifications" component={Notifications} />
      </BottomTab.Navigator>
    </Layout>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: Platform.OS === "ios" ? "center" : null,
  },
  tabBar: {
    height: 70,
    position: "absolute",
    bottom: Platform.OS === "android" ? 10 : 50,
    right: 16,
    left: 16,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "lightgreen",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: "orange",
  },
  scene: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    backgroundColor: "transparent",
  },
  stack: {
    flex: 1,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: "hidden",
  },
  transparentHeader: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  drawerStyles: { flex: 1, width: "80%", backgroundColor: "transparent" },
});
