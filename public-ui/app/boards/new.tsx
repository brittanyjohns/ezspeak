import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Image,
  Text,
} from "react-native";
import { Headline, Provider as PaperProvider } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import BoardForm from "../../components/BoardForm";
import BottomNav from "../../components/BottomNav";

export default function Page() {
  const navigation = useRouter();
  const [newBoard, setNewBoard] = useState({
    name: "",
    user_id: "",
  });
  useEffect(() => {
    setNewBoard({
      name: "",
      user_id: "",
    });
    console.log("newBoard", newBoard);
  }, []);
  function handleSubmit(event: any) {
    event.preventDefault();
    const data = new FormData();
    data.append("board[name]", event.target.name.value);
    data.append("board[user_id]", "1");
    console.log("data", data);

    fetch("http://localhost:3000/boards", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigation.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Link href="/">Index</Link>

        <Headline style={styles.heading}>NEW Board!</Headline>
        <View>
          <BoardForm board={newBoard} handleSubmit={handleSubmit} />
        </View>
        <BottomNav />
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
