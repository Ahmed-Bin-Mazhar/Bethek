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

const SignIn = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Icon}>
          <MaterialCommunityIcons name="home" size={150} color="black" />
        </View>

        <View style={styles.email}>
          <Text style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 25 }}>
            ENTER YOUR EMAIL:
          </Text>
          <TextInput
            style={{ height: 70 }}
            placeholder="Type here..."
            alignItems="center"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 3,
              paddingRight: 20,
            }}
          />
        </View>

        <View style={styles.password}>
          <Text style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 25 }}>
            ENTER YOUR PASSWORD:
          </Text>
          <TextInput
            style={{ height: 70 }}
            placeholder="Type here ..."
            alignItems="center"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 3,
              paddingRight: 10,
            }}
          />
        </View>

        <View style={styles.Button}>
          <Button title="SIGN IN" />
          <View style={{ paddingTop: 50 }}></View>
        </View>

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
            Register Admin
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 90, paddingBottom: 1 }}>
        <Footer />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Icon: {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 200,
    flexDirection: "column",
    paddingBottom: 20,
    alignItems: "center",
  },
  Container: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
  email: {},
  password: {
    paddingTop: 20,
  },
  Button: {
    paddingTop: 20,
    width: "70%",
    margin: 5,
  },
  Button1: {
    paddingTop: 20,
    width: "70%",
    margin: 5,
    borderRadius: 70,
    backgroundColor: "skyblue",
    paddingBottom: 20,
  },
  Register: {
    justifyContent: "center",
  },
});

export default SignIn;
