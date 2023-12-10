import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { getImage } from "../../api/imageItems";
import { Link, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import * as Speech from "expo-speech";
import { ImageItem } from "../../types";

export default function SingleImage() {
  const route = useRoute();
  const [image, setImage] = useState<ImageItem>({
    id: "",
    label: "",
    image_url: "",
    category: "",
  });

  const speak = (thingToSay: string) => {
    Speech.speak(thingToSay);
  };

  useEffect(() => {
    if (!("id" in route.params)) {
      return;
    }
    getImage(route.params.id as string).then((image) => setImage(image));

    console.log("route.params.id", route.params.id);
    console.log("Image", image);
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: image.label }} />
      <View style={styles.imageBox}>
        <Link href="/" asChild>
          <Pressable>
            <Text>Navigate to index.js</Text>
          </Pressable>
        </Link>
        <Text style={styles.textStyleName}>{image.label}</Text>
        <View style={styles.imagesContainer}>
          <View key={image.id} style={styles.imageWrapper}>
            <Pressable onPress={() => speak(image.label)}>
              <Image
                source={{
                  uri: image.image_url,
                }}
                style={styles.image}
              />
              <Text style={styles.text}>{image.label}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#38434D",
  },
  textStyleName: {
    fontSize: 64,
    fontWeight: "bold",
  },
  imageBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  imageWrapper: {
    width: "30%", // Adjusted for three columns
    margin: "1%", // Slight margin for spacing
    aspectRatio: 1,
  },
  image: {
    minHeight: 100,
    minWidth: 100,
    height: "85%", // Adjusted to leave space for the label
    contentFit: "cover",
  },
  text: {
    color: "white",
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    paddingTop: 2,
  },
});
