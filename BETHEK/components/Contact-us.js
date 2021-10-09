import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "./Footer";
import { Ionicons } from "@expo/vector-icons";

export default class ContactUs extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.Icon}>
          <MaterialCommunityIcons name="home" size={150} color="black" />
        </View>

        <View style={styles.page}>
          {/* Give Us a Call */}
          <View style={styles.container1}>
            <Text style={styles.heading}>GIVE US A CALL</Text>
            <Text style={styles.text}>We are happy to help you out</Text>
          </View>

          <View style={styles.call}>
            <Ionicons
              name="md-call-sharp"
              size={24}
              color="blue"
              paddingBottom="20"
            >
              {" "}
              +92334-1834367
            </Ionicons>
          </View>
          <View style={styles.address}>
            <Ionicons name="home" size={20} color="green">
              {" "}
              ORIC Office H-block room-12
            </Ionicons>
          </View>
          <View style={styles.mail}>
            <Ionicons name="mail" size={20} color="red">
              bethek.contact@gmail.com{" "}
            </Ionicons>
          </View>

          {/* or walk in 
            <View style={styles.container2}>
              <Text style={styles.heading}> Or Just Walk In</Text>
              <Text style={styles.text}>
                If you need to mail any advertising literature then please use
                any of the following addresses
              </Text>
              <View style={styles.details}>
                <Text style={styles.textnumber}>Lahore</Text>
                <Text style={styles.contact}>XYZ 458</Text>
                <Text style={styles.textnumber}>Islamabad</Text>
                <Text style={styles.contact}>ABC 545</Text>
                <Text style={styles.textnumber}>Karachi</Text>
                <Text style={styles.contact}>LMNO 021</Text>
              </View>
            </View>
            */}
        </View>

        <View style={{ paddingTop: 50 }}>
          <Footer />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  call: {
    justifyContent: "space-evenly",
    flex: 1,
    paddingTop: 88,
  },
  address: {
    justifyContent: "space-evenly",
    flex: 1,
    paddingTop: 30,
  },
  mail: {
    justifyContent: "space-evenly",
    flex: 1,
    paddingTop: 30,
  },

  Icon: {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 30,
    flexDirection: "column",
    paddingBottom: 30,
    alignItems: "center",
  },
  page: {
    padding: 10,
    flex: 1,
    paddingBottom: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  container1: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  container2: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#CBCAD1",
    backgroundColor: "#f0f8ff",
  },
  title: {
    textAlign: "center",
    flexDirection: "column",
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#10284e",
    height: 100,
    paddingTop: 38,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
