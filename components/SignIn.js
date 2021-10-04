import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "./Footer";
import { Feather } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Icon}>
          <MaterialCommunityIcons name="home" size={150} color="black" />
        </View>

        <View style={styles.name}>
          <View>
            <Feather
              name="user"
              size={20}
              color="black"
              paddingTop="30"
              alignContent="center"
              alignItems="center"
              justifyContent="center"
            >
              <Text> User Name:</Text>
            </Feather>
            <TextInput placeholder="Enter UserName" style={styles.TextInput} />
          </View>
        </View>

        <View style={styles.password}>
          <View>
            <Feather name="lock" size={20} color="black">
              <Text> Password:</Text>
            </Feather>
            <TextInput placeholder="Enter Password" style={styles.TextInput} />
          </View>
        </View>
      </View>
      <View style={styles.signInButton}>
        <TouchableOpacity style={styles.Button}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>

      {/*line in between*/}
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          left: 5,
          right: 5,
          paddingTop: 80,
        }}
      />

      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            textAlign: "center",
            justifyContent: "center",
            paddingTop: 25,
          }}
        >
          For New Users and Owners
        </Text>
      </View>

      {/* 2nd last button */}
      <View
        style={{
          paddingTop: 20,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.push("User")}
          style={styles.Button1}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>

      {/* last button */}
      <View
        style={{
          paddingTop: 10,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.push("Admin")}
          style={styles.Button1}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Register Owner
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 40, paddingBottom: 1 }}>
        <Footer />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Icon: {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 30,
    flexDirection: "column",
    paddingBottom: 30,
    alignItems: "center",
  },
  Container: {
    padding: 10,
    flex: 1,
    paddingBottom: 5,
  },

  signInButton: {
    paddingTop: 20,
  },

  Button: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#10284e",
    padding: 12,
    width: 240,
    borderRadius: 80,
    left: 62,
  },
  Button1: {
    paddingTop: 20,
    width: "60%",
    margin: 3,
    borderRadius: 120,
    backgroundColor: "skyblue",
    paddingBottom: 20,
  },
  Register: {
    justifyContent: "center",
  },
  TextInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    textAlign: "center",
  },
});

export default SignIn;
