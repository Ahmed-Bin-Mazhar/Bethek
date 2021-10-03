import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeListings = ({
  id,
  title,
  address,
  city,
  Nearby_University,
  zipcode,
  description,
  price,
  seater,
  bathrooms,
  hostel_type,
  food_facility,
  laundary_facility,
  internet_facility,
  photo_main,
  photo_1,
  photo_2,
  photo_3,
  photo_4,
  photo_5,
  photo_6,
  is_published,
  list_date,
  realtor,
  navigation,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "transparent" }}
        // onPress={() => navigation.navigate("Data", { name: "AHMED" })}
        onPress={() =>
          navigation.navigate("Data", {
            id,
            title,
            address,
            city,
            Nearby_University,
            zipcode,
            description,
            price,
            seater,
            bathrooms,
            hostel_type,
            food_facility,
            laundary_facility,
            internet_facility,
            photo_main,
            photo_1,
            photo_2,
            photo_3,
            photo_4,
            photo_5,
            photo_6,
            is_published,
            list_date,
            realtor,
            navigation,
          })
        }
      >
        <View style={styles.listItemContainer}>
          <View style={styles.ItemHeader}>
            <Text style={{ color: "#000000", fontSize: 20 }}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#000000", fontSize: 16 }}>
                {/* <MaterialIcons name="attach-money" size={20} color="#000000" /> */}
                Rs {price}
                {"/-"} {"\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#000000" }}>
                <Ionicons name="home" size={24} color="#000000" />
                {"  "}
                {hostel_type}
              </Text>

              <Text style={{ color: "#000000", paddingLeft: 10 }}>
                {/* <MaterialCommunityIcons name="food" size={24} color="#000000" />: */}
                <Ionicons name="fast-food-outline" size={24} color="#000000" />
                {"  "}
                {food_facility}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#000000" }}>
                <MaterialCommunityIcons
                  name="washing-machine"
                  size={24}
                  color="#000000"
                />
                {"  "}
                {laundary_facility}
              </Text>
              <Text style={{ color: "#000000", paddingLeft: 62 }}>
                <MaterialCommunityIcons name="wifi" size={24} color="#000000" />
                {"  "}
                {internet_facility}
              </Text>
            </View>
          </View>

          <Image
            source={{
              uri: photo_main,
            }}
            style={styles.pokeImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  ItemHeader: {},
  pokeImage: {
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    height: 120,
    width: 120,
    flexDirection: "column",
    paddingTop: 1,
    paddingBottom: 1,
  },
});

export default HomeListings;
