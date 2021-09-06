import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default class Header extends Component {
  render() {
    return (
      <View>
        {/* HEADER BAR */}
        <View style={styles.header}>
          <MaterialIcons name="menu" size={24} color="#fff" />
          <Text style={styles.title}>
            <MaterialCommunityIcons name="home" size={24} color="#fff" />
            BETHEK
          </Text>
          <Ionicons name="search" size={24} color="#fff" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20,
  },
});
