// app/routes/Board.js
import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import { useRouter } from "expo-router";

const Board = ({ route }) => {
  const { boardId } = route.params;

  return (
    <View>
      <Text>NOPE {boardId}</Text>
    </View>
  );
};

export default Board;
