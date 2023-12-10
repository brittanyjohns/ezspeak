import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  Button,
} from "react-native";
import { Headline, Provider as PaperProvider } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";

export default function Page() {
  const navigation = useRouter();
  const [image, setImage] = useState(null);
  const [imageToShow, setImageToShow] = useState(null);
  const [label, setLabel] = React.useState("Useless Label");
  const [category, setCategory] = React.useState("Useless Category");

  function handleSubmit(event: any) {
    if (!image) {
      alert("Please select an image");
      return;
    }
    event.preventDefault();
    console.log("submit image", image);
    const data = new FormData();
    data.append("image[saved_image]", image);
    data.append("image[label]", label);
    data.append("image[category]", category);
    console.log("data", data);

    fetch("http://localhost:3000/images", {
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
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageToShow(result.assets[0].uri);
      console.log("image", image);
      const img = await fetchImageFromUri(result.assets[0].uri);
      console.log("img", img);
      setImage(img);
    }
  };

  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Link href="/">Index</Link>

        <Headline style={styles.heading}>NEW IMAGE!</Headline>
        <View>
          <Pressable onPress={pickImage}>
            <Text>Pick an image from camera roll</Text>
          </Pressable>
          {image && (
            <Image
              source={{ uri: imageToShow }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <View>
          <form onSubmit={handleSubmit}>
            <Text>Label</Text>
            <TextInput
              style={styles.input}
              onChangeText={(newLabel) => setLabel(newLabel)}
            />
            <Text>Category</Text>
            <TextInput
              style={styles.input}
              onChangeText={(newCategory) => setCategory(newCategory)}
            />
            <Button
              onPress={() => {
                handleSubmit({ preventDefault: () => {} });
              }}
              title="Submit"
              color="#841584"
              aria-label="Submit"
            />
          </form>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
