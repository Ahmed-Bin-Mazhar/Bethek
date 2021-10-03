import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default RegistrationAdmin = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        {/* Title */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Title: </Text>

          <TextInput placeholder="Enter Title" style={styles.TextInput} />
        </View>

        {/* Address */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Address:</Text>

          <TextInput placeholder="Enter Address" style={styles.TextInput} />
        </View>

        {/* City */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> City:</Text>

          <TextInput placeholder="Enter City" style={styles.TextInput} />
        </View>

        {/* Nearby University */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Nearby University:
          </Text>

          <TextInput
            placeholder="Enter Nearby University"
            style={styles.TextInput}
          />
        </View>

        {/* Zipcode */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Zipcode:</Text>

          <TextInput
            placeholder="Enter Zipcode"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* description */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> description:</Text>

          <TextInput placeholder="Enter Description" style={styles.TextInput} />
        </View>
        {/* Price */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Price:</Text>

          <TextInput
            placeholder="Enter Price"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Seater */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Seater:</Text>

          <TextInput
            placeholder="Enter Seater"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Bathroom */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Bathroom:</Text>

          <TextInput
            placeholder="Enter Bathroom"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Hostel Type */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Hostel Type:</Text>

          <TextInput
            placeholder="Enter Hostel Type:"
            style={styles.TextInput}
          />
        </View>
        {/* Food Facility */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Food Facility:
          </Text>

          <TextInput
            placeholder="Enter Food Facility:"
            style={styles.TextInput}
          />
        </View>
        {/* Laundary Facility */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Laundary Facility:
          </Text>

          <TextInput
            placeholder="Enter Laundary Facility"
            style={styles.TextInput}
          />
        </View>
        {/* Internet Facility  */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Internet Facility:
          </Text>

          <TextInput
            placeholder="Enter Internet Facility"
            style={styles.TextInput}
          />
        </View>
        {/* Date */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Date:</Text>

          <TextInput placeholder="Enter Date" style={styles.TextInput} />
        </View>

        <View style={{ padding: 15 }} />
        {/* Register Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("AddImg")}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#10284e",
    padding: 12,
    width: 200,
    borderRadius: 80,
    left: 90,
    right: 55,
  },
  TextInput: {
    position: "absolute",
    borderBottomWidth: 1,
    left: 160,
    width: 200,
    fontSize: 14,
    margin: 0,
  },
});
