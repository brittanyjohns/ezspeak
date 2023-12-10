// app/cemnnoopst / ImageList.js;
import React from "react";
// import { Link } from "expo-router";
import { Link } from "@react-navigation/native";

import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const ImageList = ({ images }) => {
  return (
    <SafeAreaView>
      <View>
        {images.map((image) => (
          <View key={image.id}>
            <Link to={{ screen: "images/[id]", params: { id: image.id } }}>
              {image.label}
            </Link>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ImageList;
