import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Drawer Screens
import Profile from '../screens/App/DrawerSceens/Profile'
//Bottom Screens
import Home from '../screens/App/BottomTabScreens/Home'
import Search from '../screens/App/BottomTabScreens/Search'
import Messages from '../screens/App/BottomTabScreens/Messages'
import Notifications from '../screens/App/BottomTabScreens/Notifications'
//Details Screen
import PostDetails from "../screens/App/Details/PostDetails";
import { FontAwesome } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

const StackApp = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="PostDetails" component={PostDetails}/>

    </Stack.Navigator>
  )
}

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Accueil" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default AppStack;

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="HomeStack" screenOptions={{headerShown:false}}>
      <BottomTab.Screen name="HomeStack" component={StackApp} options={{tabBarLabel:'Home'}} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Messages" component={Messages} />
      <BottomTab.Screen name="Notifications" component={Notifications} />
    </BottomTab.Navigator>
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
