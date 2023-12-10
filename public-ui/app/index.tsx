import { StyleSheet, SafeAreaView, View, Button } from "react-native";
import Board from "../components/Board";
import { BoardScreen } from "../screens/BoardScreen";
import { Headline, Provider as PaperProvider } from "react-native-paper";
import { BoardsScreen } from "../screens/BoardsScreen";
import BottomNav from "../components/BottomNav";
import { Link, useRouter } from "expo-router";
import ImageFilePicker from "../components/ImageFilePicker";

export default function Page() {
  const navigation = useRouter();
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Link href="/about">About</Link>

        <Headline style={styles.heading}>Welcome to EZeeSpeak</Headline>
        <View>
          <BoardsScreen />
          <View>
            <Button
              title="Create New Image"
              onPress={() => {
                navigation.push("/images/new");
              }}
            />
          </View>
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
