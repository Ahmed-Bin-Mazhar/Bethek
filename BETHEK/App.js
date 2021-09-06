import React from "react";
import { ScrollView, useState, View } from "react-native";

import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import ContactUs from "./components/Contact-us";
import Feature from "./components/Featured";
import HomeStack from "./routes/HomeStack";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return <HomeStack />;
}
