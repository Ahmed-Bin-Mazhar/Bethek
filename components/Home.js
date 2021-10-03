import React, { Component, PureComponent } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import HomeListings from "../Listings/HomeListings";
import Footer from "./Footer";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

class Home extends PureComponent {
  state = {
    Listings: [],

    loading: true,
  };

  async componentDidMount() {
    fetch("http://3.135.209.144:8000/ep/hostels-all")
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({ Listings: resJson, loading: false });
      });
  }

  render() {
    const { Listings, loading } = this.state;

    if (!loading) {
      return (
        <View>
          <ScrollView>
            <View style={styles.header}>
              <MaterialCommunityIcons
                name="home"
                size={40}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.TopText}>
                find accomodation of your choice
              </Text>

              {/* Search bar    */}

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Search")}
                style={{
                  borderRadius: 80,
                  backgroundColor: "#fff",
                  position: "absolute",
                  bottom: 50,
                  left: 50,
                  right: 50,
                  padding: 5,
                  color: "#A6A6A6",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Text>"Search for Accomodations"</Text>
                <EvilIcons
                  name="search"
                  size={26}
                  color="#A6A6A6"
                  style={{
                    justifyContent: "flex-end", //Centered horizontally
                    alignItems: "center",
                  }}
                />
              </TouchableOpacity>

              {/* Search Bar The End  */}
            </View>
            <View>
              <FlatList
                data={Listings}
                renderItem={(data) => (
                  <HomeListings
                    {...data.item}
                    navigation={this.props.navigation}
                  />
                )}
                keyExtractor={(item) => item.name}
              />
            </View>
            <View>
              <Footer />
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return <ActivityIndicator size="large" color="#10284e" />;
    }
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 80,
    backgroundColor: "#10284e",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  TopText: {
    color: "#fff",
    fontStyle: "italic",
    fontSize: 13,
    position: "absolute",
    left: 100,
    right: 100,
    top: 13,
  },
  icon: {
    position: "absolute",
    left: 50,
    top: 0,
  },
});

export default Home;
