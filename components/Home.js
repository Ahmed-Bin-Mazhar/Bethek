import React, { Component, PureComponent } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import HomeListings from "../Listings/HomeListings";
import Footer from "./Footer";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isLoading: true, text: "" };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch("http://3.135.209.144:8000/ep/hostels-all")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#fff",
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 0 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <View style={styles.header}>
            <MaterialCommunityIcons
              name="filter-outline"
              size={30}
              color="#fff"
              style={{ position: "absolute", right: 18, top: 75 }}
              onPress={() => this.props.navigation.push("Search")}
            />
            <Text style={styles.TopText}>Search for Hostels</Text>

            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              //value={this.state.text}
              placeholder="Search Here ..."
            ></TextInput>
          </View>

          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={(data) => (
              <HomeListings {...data.item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item) => item.name}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
          />
        </View>
        <Footer />
      </ScrollView>
    );
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
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 0,
    padding: 0,
    backgroundColor: "#fff",
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    position: "absolute",
    bottom: 50,
    left: 50,
    right: 50,
    padding: 5,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#fff",
    borderRadius: 80,
  },
});
export default Home;
