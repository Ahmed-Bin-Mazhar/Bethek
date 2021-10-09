import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Footer from "./Footer";

class Aboutus extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.Heading}>Welcome To Bethek</Text>
          </View>
          <View>
            <Text style={styles.text}>
              Bethek is a platform to provide users find an accommodation of
              their choice. The accommodation details come from various
              proprietors and owners. The user can search their preferable
              accommodation and contact directly with the proprietor/owner to
              lock the idea.
            </Text>
          </View>
          <View>
            <Text style={styles.Heading}>Our Mission</Text>
          </View>
          <View>
            <Text style={styles.text}>
              svbsdbfusdfhsdfjhsdufbsdbuvsdbsdbkvjhsdhvbsdkbvjhsdhvhsdbvbsdfhmvhsdhbsdjbsdhkbvjhsdhvbsdjhvbsdhvksdhbvjhsdfhvghsdfhvbsfhgrfbgjhsdfyjsfhfgbsfjkguksdfhvhsfvjsdfhhsdfhusdjsdfhhzxdfnbvjksfdbvjklgsfdgvsdfhsgkjsrbkgjsdfghuhsrkgbsdfbvjhsdfvbjkgjhsdfjhgbwsf
              wssergsdrg jkser ksrk g hr kwe4b uirgherhsrh kwe sr hgwrh gsrhg
              er8owhgrhguierhui gerb vsdfu werk hwerh berjhghr jwr sr hrwnb
              bsdhbgwerjhb wbn{" "}
            </Text>
          </View>
          <View>
            <Text style={styles.Heading}>Our Core Principles</Text>
          </View>
          <View>
            <Text style={styles.text}>
              Bethek is a platform to provide users find an accommodation of
              their choice. The accommodation details come from various
              proprietors and owners. The user can search their preferable
              accommodation and contact directly with the proprietor/owner to
              lock the idea.
            </Text>
          </View>

          {/*

          <View>
            <Text style={styles.Heading}>Meet Our Team</Text>
          </View>
            <View style={styles.container}>
            <Image
              style={styles.picture}
              source={require("../Team-Img/dr_aamer.png")}
            />
            <Text style={(styles.text, { fontWeight: "bold" })}>
              Dr Aamer Iqbal Bhatti
            </Text>
          </View>
          <View style={styles.container}>
            <Image
              style={styles.picture}
              source={require("../Team-Img/shujaat.jpg")}
            />
            <Text style={(styles.text, { fontWeight: "bold" })}>
              Engr Shujat Hussain
            </Text>
          </View>
          <View style={styles.container}>
            <Image
              style={styles.picture}
              source={require("../Team-Img/iftikhar.jpg")}
            />
            <Text style={(styles.text, { fontWeight: "bold" })}>
              Iftikhar Hamayun
            </Text>
          </View>
          <View style={styles.container}>
            <Image
              style={styles.picture}
              source={require("../Team-Img/ahmed.png")}
            />
            <Text style={(styles.text, { fontWeight: "bold" })}>
              Ahmed Bin Mazhar
            </Text>
          </View>

          */}

          {/* Footer 
          <View style={styles.footer}>
            <MaterialCommunityIcons name="home" size={40} color="#fff" />
            <Text
              style={{
                textAlign: "center",
                flexDirection: "column",
                color: "white",
                fontSize: 24,
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              Bethek
            </Text>
          </View>

          <View style={styles.mainfooter}>
            <Text style={{ color: "#fff" }}>Copyright © 2021 AAA PAK</Text>
          </View>
              */}

          <View style={{ paddingTop: 27 }}>
            <Footer />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#20c997",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  picture: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",

    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },

  Heading: {
    textAlign: "center",
    flexDirection: "column",
    color: "black",
    fontSize: 24,
    justifyContent: "center",
    fontWeight: "bold",
    padding: 25,
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
  mainfooter: {
    backgroundColor: "#10284e",
    height: 30,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Aboutus;
