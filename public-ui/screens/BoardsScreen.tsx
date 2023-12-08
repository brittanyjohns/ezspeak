import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { getBoards } from "../api/boards";
import BoardItem from "../components/BoardItem";

export function BoardsScreen() {
  const [boards, setBoards] = useState([]);
  const logBoards = () => {
    console.log(boards);
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
        {boards &&
          boards.map((board: any) => (
            <View key={board.id}>
              <BoardItem
                id={board.id}
                name={board.name}
                user_id={board.user_id}
                onClick={gotToBoard}
              />
            </View>
          ))}
      </SafeAreaView>
    </ScrollView>
  );
}
