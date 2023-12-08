import { Text, View, StyleSheet, Button } from "react-native";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { BoardWithImages } from "../../types";
import { useRoute } from "@react-navigation/native";
import { getBoardWithImages } from "../../api/boards";
import { Link, useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "expo-image";
import * as Speech from "expo-speech";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#38434D",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  textStyleName: {
    fontSize: 64,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#38434D",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  boardBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
});
export default function SingleBoard() {
  const route = useRoute();
  const [board, setBoard] = useState<BoardWithImages>({
    id: "",
    user_id: "",
    name: "",
    images: [],
  });

  const speak = (thingToSay: string) => {
    // const utterance = new SpeechSynthesisUtterance(thingToSay);
    // utterance.pitch = 1.5;
    // utterance.volume = 0.7;
    // utterance.rate = 1;

    // speechSynthesis.speak(utterance);
    Speech.speak(thingToSay);
  };
  useEffect(() => {
    if (!("id" in route.params)) {
      return;
    }
    getBoardWithImages(route.params.id as string).then((board) =>
      setBoard(board)
    );

    console.log("route.params.id", route.params.id);
    console.log("Board", board);
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: board.name }} />
      <View style={styles.boardBox}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Text>Navigate to index.js</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.textStyleName}>{board.name}</Text>
        <Text style={styles.textStyle}>
          ID: {(board as BoardWithImages).id}
        </Text>
        {board.images.map((image) => (
          <View key={image.id}>
            <Text style={styles.textStyle}>{image.label}</Text>
            <Button title={image.label} onPress={() => speak(image.label)} />
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: `https://picsum.photos/seed/69${image.id}/3000/2000`,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
