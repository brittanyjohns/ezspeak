// app/cemnnoopst / BoardList.js;
import React from "react";
// import { Link } from "expo-router";
import { Link } from "@react-navigation/native";

import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BoardList = ({ boards }) => {
  return (
    <SafeAreaView>
      <View>
        {boards.map((board) => (
          <View key={board.id}>
            <Link to={{ screen: "boards/[id]", params: { id: board.id } }}>
              {board.name}
            </Link>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default BoardList;
