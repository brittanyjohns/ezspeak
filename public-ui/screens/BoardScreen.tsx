import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { getBoard } from "../api/boards";
import ImageItem from "../components/ImageItem";
interface BoardProps {
  id: string;
  name: string;
  user_id: string;
}
export function BoardScreen(props: BoardProps) {
  const [board, setBoard] = useState([]);
  const [imageItems, setImageItems] = useState([]);
  const logImages = () => {
    console.log(imageItems);
  };

  const logBoard = () => {
    console.log(board);
  };

  useEffect(() => {
    logBoard();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
      <SafeAreaView>
        {imageItems &&
          imageItems.map((imageItem: any) => (
            <View key={imageItem.id}>
              <ImageItem
                label={imageItem.label}
                category={""}
                private={false}
                ai_generated={false}
                url={""}
                user_id={""}
              />
            </View>
          ))}
      </SafeAreaView>
    </ScrollView>
  );
}
