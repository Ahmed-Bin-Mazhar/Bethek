import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text } from "react-native";
import Home from "../components/Home";
import Aboutus from "../components/Aboutus";
import ContactUs from "../components/Contact-us";
import Search from "../components/Search";
import Data from "../Listings/Data";
import Feature from "../components/Featured";

import { createStackNavigator } from "@react-navigation/stack";

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
            padding: 50,
            backgroundColor: "#10284e",
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          <View>
            <MaterialCommunityIcons name="home" size={35} color="#fff">
              <Text style={{ paddingTop: 5, color: "#fff", fontSize: 28 }}>
                Bethek
              </Text>
            </MaterialCommunityIcons>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

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
const Stack = createStackNavigator();

function SearchListing() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,

          headerTitleAlign: "center",
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
      />

      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
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
      />
    </Stack.Navigator>
  );
}

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "BETHEK",
          headerTitleAlign: "left",

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
      />

      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
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
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "Filter Search",
          headerTitleAlign: "center",
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
      />
    </Stack.Navigator>
  );
}

function Featured() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Featured Items"
        component={Feature}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#10284e",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",
          headerShown: false,

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
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
      />
    </Stack.Navigator>
  );
}

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
        component={HomeNavigation}
        name="Home"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name="Featured Listing"
        component={Featured}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#10284e",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",
          headerShown: true,

          headerTitleStyle: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 22,
          },
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchListing}
        options={{ headerTitleAlign: "center" }}
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
