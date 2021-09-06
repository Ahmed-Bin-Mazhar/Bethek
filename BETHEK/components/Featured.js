import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Feature extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* HEADER */}
          {/* <Header /> */}
          <View>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
            <Text>Dummy TEXT Dummy TEXT Dummy TEXT Dummy TEXT</Text>
          </View>
          {/* FOOTER */}
          <Footer />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Feature;
