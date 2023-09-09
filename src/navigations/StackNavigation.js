import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar } from "./BottomTabBar";
import Alappuzha from "../screens/Alappuzha";
import Qila from "../screens/Qila";
import BadshahiMasjid from "../screens/BadshahiMasjid";
import JahangirTomb from "../screens/JahangirTomb";
import TajMahal from "../screens/TajMahal";

const Stack = createNativeStackNavigator();

export function StackNavigation({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animation: "slide_from_bottom", headerShown: false }}
      >
        <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
        <Stack.Screen name="Alappuzha" component={Alappuzha} />
        <Stack.Screen name="Qila" component={Qila} />
        <Stack.Screen name="BadshahiMasjid" component={BadshahiMasjid} />
        <Stack.Screen name="JahangirTomb" component={JahangirTomb} />
        <Stack.Screen name="TajMahal" component={TajMahal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
