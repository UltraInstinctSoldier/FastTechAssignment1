import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

export default function Account({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <ImageBackground
          source={require("../../assets/top.jpg")}
          style={{
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            height: 200,
            overflow: "hidden",
            borderRadius: 15,
            marginBottom: 45,
          }}
        >
          <View style={{ marginLeft: 10, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Hello, Sarah 👋</Text>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Let's Start Exploring!
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 350,
              top: 80,
            }}
          >
            <Image
              source={require("../../assets/profile.png")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            width: "90%",
            height: 50,
            borderRadius: 15,
            alignItem: "center",
            alignContent: "center",
            position: "absolute",
            top: 170,
          }}
        >
          <Searchbar
            placeholder="Search location"
            style={{
              backgroundColor: "transparent",
              width: "90%",
              height: 50,
              justifyContent: "center",
            }}
          />
          <TouchableOpacity>
            <Ionicons name="menu" size={30} style={{ alignSelf: "center" }} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "darkorange",
            }}
          >
            Account Details
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
