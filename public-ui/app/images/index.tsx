import { StyleSheet, SafeAreaView, View, Button, Text } from "react-native";
import { Headline, Provider as PaperProvider } from "react-native-paper";

import { Link, useRouter } from "expo-router";
import BottomNav from "../../components/BottomNav";
import React from "react";
import { ImagesScreen } from "../../screens/ImagesScreen";

export default function Page() {
  const navigation = useRouter();
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Link href="/">Index</Link>

        <Headline style={styles.heading}>IMAGE INDEX!!</Headline>
        <View>
          <ImagesScreen />
          <BottomNav />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#38434D",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
