import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { getBoards } from "../api/boards";
import BoardList from "../components/BoardList";

export function BoardsScreen() {
  const [boards, setBoards] = useState([]);
  const { slug } = useLocalSearchParams();
  const logBoards = () => {
    console.log(boards);
    console.log(slug);
  };
  const gotToBoard = () => {
    console.log("Going to board");
  };
  useEffect(() => {
    getBoards().then((boards) => setBoards(boards));
    logBoards();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
      <SafeAreaView>
        <Text>Blog post: {slug}</Text>
        <BoardList boards={boards} />
      </SafeAreaView>
    </ScrollView>
  );
}
