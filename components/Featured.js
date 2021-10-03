import React, { Component } from "react";

import Footer from "./Footer";
import { PureComponent } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import HomeListings from "../Listings/HomeListings";

class Feature extends Component {
  state = {
    Listings: [],
    loading: true,
  };

  async componentDidMount() {
    fetch("http://18.189.188.229:8000/listings/listingsEp/listings-all")
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({ Listings: resJson, loading: false });
      });
  }

  render() {
    const { Listings, loading } = this.state;
    if (!loading) {
      return (
        <FlatList
          data={Listings}
          renderItem={(data) => (
            <HomeListings {...data.item} navigation={this.props.navigation} />
          )}
          keyExtractor={(item) => item.name}
        />
      );
    } else {
      return <ActivityIndicator size="large" color="#10284e" />;
    }
  }
}

export default Feature;
