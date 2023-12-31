import "expo-dev-client";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Headline, Provider as PaperProvider } from "react-native-paper";
import { BoardsScreen } from "./screens/BoardsScreen";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Headline style={styles.heading}>Hello, World!</Headline>
        <View>
          <BoardsScreen />
          <BottomNav />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  heading: {
    color: "#000",
  },
});
