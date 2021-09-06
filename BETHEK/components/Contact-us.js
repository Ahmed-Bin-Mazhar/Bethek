import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class ContactUs extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            {/* Give Us a Call */}
            <View style={styles.container}>
              <Text style={styles.heading}>GIVE US A CALL</Text>
              <Text style={styles.text}>
                Feel free to give us a call on following numbers{" "}
              </Text>
              <View style={styles.details}>
                <Text style={styles.textnumber}>HelpLine</Text>
                <Text style={styles.contact}>+92 111 111 111</Text>
                <Text style={styles.textnumber}>Main Office</Text>
                <Text style={styles.contact}>+92 (051) 151 514</Text>
                <Text style={styles.textnumber}>Email</Text>
                <Text style={styles.contact}>bethek.contact@gmail.com</Text>
              </View>
            </View>
            {/* or walk in */}
            <View style={styles.container}>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
  details: {
    flexDirection: "column",
  },
  textnumber: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 24,
  },
  text: {
    textAlign: "left",
    fontWeight: "300",
    fontSize: 20,
  },
  heading: {
    textAlign: "left",
    fontWeight: "900",
    fontSize: 24,
  },
  container: {
    borderBottomWidth: 3,
    borderColor: "#CBCAD1",
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
