import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "../components/Footer";

class SignIn extends Component {
  render() {
    return (
      <View>
        <View style={styles.Container}>
          <View style={styles.Icon}>
            <MaterialCommunityIcons name="home" size={150} color="#10284e" />
          </View>

          <View style={styles.email}>
            <Text
              style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 25 }}
            >
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
            <Text
              style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 25 }}
            >
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
            <Button color="#10284e" title="SIGN IN" />
          </View>

          <View style={styles.Register}>
            <Text style={{ paddingBottom: 0, fontSize: 12 }}>
              IF NOT REGISTERED THEN:
            </Text>
            <Button color="#10284e" title="REGISTER" />
          </View>
        </View>
        <View style={{ paddingTop: 265, paddingBottom: 1 }}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Icon: {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 30,
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
  Register: {
    paddingTop: 70,
  },
});

export default SignIn;
