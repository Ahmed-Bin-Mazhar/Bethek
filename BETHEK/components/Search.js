import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "../components/Footer";

class Search extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.Container}>
            <View style={{ paddingTop: 0 }}>
              <View style={styles.body1}>
                <Text
                  style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 19 }}
                >
                  KEYWORD:
                </Text>
                <TextInput
                  style={{ height: 70 }}
                  placeholder="Type here..."
                  alignItems="center"
                  style={{
                    height: 40,
                    borderColor: "darkblue",
                    borderWidth: 1,
                    paddingRight: 20,
                  }}
                />
              </View>
              <View style={styles.body2}>
                <Text
                  style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 19 }}
                >
                  TOWN:
                </Text>
                <TextInput
                  style={{ height: 70 }}
                  placeholder="Type here..."
                  alignItems="center"
                  style={{
                    height: 40,
                    borderColor: "darkblue",
                    borderWidth: 1,
                    paddingRight: 20,
                  }}
                />
              </View>
              <View style={styles.body3}>
                <Text
                  style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 19 }}
                >
                  CITY:
                </Text>
                <TextInput
                  style={{ height: 70 }}
                  placeholder="Type here..."
                  alignItems="center"
                  style={{
                    height: 40,
                    borderColor: "darkblue",
                    borderWidth: 1,
                    paddingRight: 20,
                  }}
                />
              </View>
              <View style={styles.body4}>
                <Text
                  style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 19 }}
                >
                  BEDS:
                </Text>
                <TextInput
                  style={{ height: 70 }}
                  placeholder="Type here..."
                  alignItems="center"
                  style={{
                    height: 40,
                    borderColor: "darkblue",
                    borderWidth: 1,
                    paddingRight: 20,
                  }}
                />
              </View>
              <View style={styles.body5}>
                <Text
                  style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 19 }}
                >
                  PRICE:
                </Text>
                <TextInput
                  style={{ height: 70 }}
                  placeholder="Type here..."
                  style={{
                    height: 40,
                    borderColor: "darkblue",
                    borderWidth: 1,
                    paddingRight: 20,
                  }}
                />
              </View>
              <View style={styles.body6}>
                <Text
                  style={{ paddingBottom: 0, fontWeight: "bold", fontSize: 19 }}
                >
                  OTHERS:
                </Text>
                <TextInput
                  style={{ height: 70 }}
                  placeholder="Type here..."
                  alignItems="center"
                  style={{
                    height: 40,
                    borderColor: "darkblue",
                    borderWidth: 1,
                    paddingRight: 20,
                  }}
                />
              </View>

              <View style={styles.button}>
                <Button color="#10284e" title="SUBMIT" />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    paddingTop: 0,
    paddingBottom: 200,
  },

  body1: {
    alignItems: "stretch",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
    padding: 10,
    paddingTop: 60,
  },
  body2: {
    alignItems: "stretch",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
    padding: 10,
  },
  body3: {
    alignItems: "stretch",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
    padding: 10,
  },
  body4: {
    alignItems: "stretch",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
    padding: 10,
  },
  body5: {
    alignItems: "stretch",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
    padding: 10,
  },
  body6: {
    alignItems: "stretch",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
    padding: 10,
  },
  button: {
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 10,
  },
});

export default Search;
