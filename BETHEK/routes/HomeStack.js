import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  headerStyle,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Home from "../components/Home";
import Aboutus from "../components/Aboutus";
import ContactUs from "../components/Contact-us";
import Search from "../components/Search";

import Feature from "../components/Featured";
import SignIn from "../components/SignIn";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            backgroundColor: "#10284e",
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          <Image
            source={require("../Team-Img/ahmed.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <View>
            <Text style={{ paddingTop: 5, color: "#fff" }}>
              Ahmed Bin Mazhar
            </Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: "#10284e",
          padding: 30,
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#10284e",
          flexDirection: "column",
          padding: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>
          <Text style={{ color: "#fff" }}>Copyright © 2021 AAA PAK</Text>
        </Text>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,

        headerStyle: {
          backgroundColor: "#10284e",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: "#fff",

        headerTitleStyle: {
          color: "#fff",
          fontWeight: "600",
          fontSize: 22,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        component={Home}
        name="Home"
        options={{
          headerTitle: "BETHEK",
          headerTitleAlign: "center",
        }}
      />

      <Drawer.Screen
        name="About US"
        component={Aboutus}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Contact US"
        component={ContactUs}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Featured Listing"
        component={Feature}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Account"
        component={SignIn}
        options={{ headerTitleAlign: "center" }}
      />
    </Drawer.Navigator>
  );
};

export default class HomeStack extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
