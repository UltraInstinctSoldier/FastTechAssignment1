import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { BlurView } from "expo-blur";
import { useState } from "react";

export default function Home({ navigation }) {
  const [appVersion, setAppVersion] = useState("Paid Version");
  const [adOnOff, setAdOnOff] = useState(true);
  const destination = [
    {
      img: "https://images.memphistours.com/large/885cb89554ab38136db6ef6d44c9843b.jpg",

      DesName: "Alappuzha boat house",
      NavigateToScreen: "Alappuzha",
      DesLocation: "Kerala, India",
      about:
        "Alappuzha boat house is a popular tourist destination in Alappuzha, Kerala, India. It is a cluster of houseboats moored in the backwaters of Alappuzha. The houseboats are traditional Kerala style boats with living quarters, kitchen, and bedrooms. They are a popular way to experience the beauty of the backwaters and the local culture. ",
    },
    {
      img: "https://res.cloudinary.com/www-travelpakistani-com/image/upload/w_900,h_360,c_fill,g_auto,q_30,dpr_1.0,f_auto/blogs/lcbmujthl8ib7deszmwf.webp",
      DesName: "Shahi Qila",
      NavigateToScreen: "Qila",
      DesLocation: "Lahore, Pakistan",
      about:
        "The Shahi Qila (or Lahore Fort) is a citadel in the city of Lahore in Punjab, Pakistan. It is a UNESCO World Heritage Site and one of the most popular tourist destinations in Pakistan. The fort was built by Mughal Emperor Akbar in the 16th century and has been expanded and modified by subsequent rulers. It is a massive complex of buildings, gardens, and courtyards, covering an area of over 20 hectares (50 acres).",
    },
    {
      img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      DesName: "Taj Mahal",
      NavigateToScreen: "TajMahal",
      DesLocation: "Agra, India",
      about:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned 1628–1658), to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
    },
    {
      img: "https://www.fooditravellers.com/wp-content/uploads/2022/02/340953814_b162ae8b0e_o_1200x628.jpg",
      DesName: "Badshahi Mosque",
      NavigateToScreen: "BadshahiMasjid",
      DesLocation: "Lahore, Pakistan",
      about:
        "The Badshahi Mosque (Urdu: بادشاھی مسجد, lit. 'Emperor's Mosque') is a Mughal-era mosque in Lahore, Pakistan. It was built by the sixth Mughal emperor, Aurangzeb, in 1673. The mosque is the second largest mosque in Pakistan and the fifth largest mosque in the world. It is one of the most famous historical places in Pakistan and a major tourist attraction. ",
    },
    {
      img: "https://beautyofpakistan.com/locationimages/jahangir-tomb-outerview.webp",

      DesName: "Jahangir's Tomb",
      NavigateToScreen: "JahangirTomb",
      DesLocation: "Lahore, Pakistan",
      about:
        "The Tomb of Jahangir is a mausoleum located in Shahdara Bagh, Lahore, Pakistan. It was built by his son, Shah Jahan, in 1637. The tomb is a UNESCO World Heritage Site and is considered one of the finest examples of Mughal architecture. ",
    },
  ];

  const onLocationPress = (name, item, data) => {
    navigation.navigate(name, { item, destination });
  };
  const ChangeAppVersion = () => {
    if (adOnOff == true) {
      setAdOnOff(false);
      setAppVersion("Free Version");
    } else if (adOnOff == false) {
      setAdOnOff(true);
      setAppVersion("Paid Version");
    }
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
          source={require("../../assets/top.jpg")}
          style={{
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            height: 180,
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
            top: 150,
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
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: 310,
            overflow: "hidden",
            borderRadius: 15,
          }}
        >
          <Text style={{ marginBottom: 10, fontWeight: "bold", fontSize: 25 }}>
            Recommended for You
          </Text>
          <ImageBackground
            source={require("../../assets/Kerala.png")}
            style={{
              width: "100%",
              height: 250,
              borderRadius: 15,
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "93%",
                height: 60,
                backgroundColor: "transparent",
              }}
            >
              <BlurView
                intensity={30}
                tint="light"
                style={{ borderRadius: 100, overflow: "hidden" }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    // backgroundColor: "rgba(225,255,255,0.3)",
                    padding: 10,
                    borderRadius: 50,
                  }}
                >
                  $855.00 / Per Days
                </Text>
              </BlurView>
              <TouchableOpacity>
                <BlurView
                  intensity={30}
                  tint="light"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>♥</Text>
                </BlurView>
              </TouchableOpacity>
            </View>
            <BlurView
              intensity={25}
              tint="light"
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "93%",
                height: 90,
                marginBottom: 40,
                borderRadius: 15,
                overflow: "hidden",
                justifyContent: "space-around",
              }}
            >
              <View style={{ width: "70%" }}>
                <Text style={{ color: "white", fontSize: 25 }}>
                  Kerala, India
                </Text>
                <Text style={{ color: "white", fontSize: 14 }}>
                  {<Ionicons name="location" color={"orange"} />} Wayanad,
                  Kerala {"   "}* 7-8 days
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "orange",
                    width: 60,
                    height: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 13,
                  }}
                >
                  <MaterialCommunityIcons
                    name="share-outline"
                    size={40}
                    color={"white"}
                  />
                </View>
              </TouchableOpacity>
            </BlurView>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: 285,
            // marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Popular Destination
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                width: 100,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
              onPress={() => ChangeAppVersion()}
            >
              <Text style={{ color: "white" }}>{appVersion}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={destination}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => onLocationPress(item.NavigateToScreen, item)}
                style={{
                  width: 240,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "lightgray",
                  margin: 5,
                  // marginBottom: 100,
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
                <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                  {item.DesName}
                </Text>
                <Text
                  style={{ color: "gray", marginLeft: 10, marginBottom: 10 }}
                >
                  <Ionicons name="location" size={15} color={"orange"} />
                  {item.DesLocation}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 170,
              left: 320,
              borderRadius: 100,
              backgroundColor: "orange",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="add" size={30} color={"white"} />
          </TouchableOpacity>
          {adOnOff && (
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/Version.png")}
                style={{ resizeMode: "contain", width: "95%", height: 60 }}
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
