import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Foundation, EvilIcons } from "@expo/vector-icons";
import Account from "../screens/Account";
import Explore from "../screens/Explore";
import Home from "../screens/Home";
import MidLogoScreen from "../screens/MidLogoScreen";
import MyTrip from "../screens/MyTrip";
import { useIsFocused } from "@react-navigation/native";
import { Image } from "react-native";
const BottomTab = createBottomTabNavigator();

export function BottomTabBar() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 15 },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { borderTopWidth: 0, shadowColor: "white" },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Foundation
              name="home"
              size={30}
              color={useIsFocused() ? "orange" : "black"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/explore.png")}
              style={{
                tintColor: useIsFocused() ? "orange" : "black",
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MidLogoScreen"
        component={MidLogoScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/Capture.png")}
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyTrip"
        component={MyTrip}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/Mytrip.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                tintColor: useIsFocused() ? "orange" : "black",
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => (
            <EvilIcons
              name="user"
              size={35}
              style={{ color: useIsFocused() ? "orange" : "black" }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
