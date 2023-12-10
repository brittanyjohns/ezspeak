// app/cemnnoopst / BoardForm.js;
import React, { useState } from "react";

import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const BoardForm = ({ board, handleSubmit }) => {
  const [boardToEdit, setBoardToEdit] = useState(
    board
      ? board
      : {
          name: "",
          user_id: "",
        }
  );
  return (
    <SafeAreaView>
      <View>
        <form onSubmit={handleSubmit}>
          <label htmlFor="label">Name</label>
          <input type="text" name="label" id="name" />
          <button type="submit">Submit</button>
        </form>
      </View>
    </SafeAreaView>
  );
};

export default BoardForm;
