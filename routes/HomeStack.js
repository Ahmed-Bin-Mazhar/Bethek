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
import Home from "../components/Home";
import Aboutus from "../components/Aboutus";
import ContactUs from "../components/Contact-us";
import Search from "../components/Search";
import Data from "../Listings/Data";
import Feature from "../components/Featured";
import SignIn from "../components/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationAdmin from "../components/RegistrationAdmin";
import RegistrationUser from "../components/RegistrationUser";
import AddListings from "../components/AddListings";
import AddImage from "../components/AddImage";
import SearchData from "../components/SearchData";

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
            source={require("../Team-Img/dr_aamer.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <View>
            <Text style={{ paddingTop: 5, color: "#fff" }}>
              Dr Aamer Iqbal Bhatti
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
          backgroundColor: "#5f9ea0",
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
const Stack = createStackNavigator();

function Account({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        component={SignIn}
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
          headerLeft: () => (
            <Ionicons name="ios-menu-sharp" size={24} color="#fff" />
          ),
          headerLeftContainerStyle: {
            left: 16,
          },
        }}
      />
      <Stack.Screen name="AddImg" component={AddImage} />
      <Stack.Screen
        name="User"
        component={RegistrationUser}
        options={{
          headerTitle: "User Registration",
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
        name="Home"
        component={Home}
        options={{
          headerShown: false,
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
        name="Admin"
        component={RegistrationAdmin}
        options={{
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

function AddData() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddList" component={AddListings} />

      <Stack.Screen name="AddImg" component={AddImage} />
    </Stack.Navigator>
  );
}

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
        name="Search Data"
        component={SearchData}
        options={{
          headerTitle: "Search Result",
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
        name="SearchData"
        component={SearchData}
        options={{
          headerTitle: "Search Result",
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
        name="Add Listing"
        component={AddData}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />

      <Drawer.Screen
        name="Account"
        component={Account}
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
