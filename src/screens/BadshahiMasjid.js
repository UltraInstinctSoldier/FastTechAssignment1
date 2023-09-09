import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function BadshahiMasjid({ navigation, route }) {
  const data = route.params.item;
  const destination = route.params.destination;
  const goBack = () => {
    navigation.pop();
  };
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
          source={{ uri: data.img }}
          style={{
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            height: 300,
            overflow: "hidden",
            borderRadius: 15,
            marginBottom: 45,
          }}
        >
          <TouchableOpacity style={{ bottom: 60, left: 20 }} onPress={goBack}>
            <Ionicons name="arrow-back" size={35} color={"white"} />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            width: "90%",
            height: 80,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "space-around",
            position: "absolute",
            top: 260,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 }, // Shadow position
            shadowOpacity: 0.5,
            shadowRadius: 2,
          }}
        >
          <View style={{ margin: 0 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              {data.DesName}
            </Text>
            <Text style={{ fontSize: 15, color: "orange" }}>
              <Ionicons name="location" size={15} />
              {data.DesLocation}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "orange",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/Mytrip.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: "white",
              }}
            />
          </View>
        </View>
        <View style={{ width: "90%", height: 200 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>About</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "gray",
            }}
          >
            {"\n"} {data.about}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: 250,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Nearest Places
          </Text>
          <FlatList
            horizontal
            data={destination}
            renderItem={({ item, index }) => (
              <View
                onPress={() => onLocationPress(item.NavigateToScreen, item)}
                style={{
                  width: 240,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "lightgray",
                  margin: 5,
                  marginBottom: 10,
                  justifyContent: "center",
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    borderRadius: 15,
                    resizeMode: "contain",
                    width: "95%",
                    height: "65%",
                    margin: 5,
                    marginBottom: 10,
                  }}
                />
                <Text
                  style={{
                    position: "absolute",
                    left: 10,
                    bottom: 170,
                    color: "white",
                  }}
                >
                  <FontAwesome5 name="stopwatch" size={15} /> 10:00 AM - 06:00
                  PM
                </Text>
                <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                  {item.DesName}
                </Text>
                <Text
                  style={{ color: "gray", marginLeft: 10, marginBottom: 10 }}
                >
                  <Ionicons name="location" size={15} color={"orange"} />
                  {item.DesLocation}
                </Text>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 50,
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "darkorange",
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>Create Itinerary</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
