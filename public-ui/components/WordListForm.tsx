import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { addImageListToBoard } from "../api/boards";

const WordListForm = ({ boardId }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordList, setWordList] = useState([]);

  const handleAddWord = () => {
    if (currentWord.trim() !== "") {
      setWordList([...wordList, currentWord.trim()]);
      setCurrentWord("");
    }
  };

  const handleSubmit = async () => {
    // Here you can handle the submission of the word list
    // For example, sending it to a server or another component
    console.log("Board ID:", boardId);
    console.log("Word List:", wordList);
    const board = await addImageListToBoard(boardId, { word_list: wordList });
    // fetch(`http://localhost:3000/boards/${boardId}/add_word_list`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ word_list: wordList }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    // Clear the list after submission if needed

    setWordList([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a word"
        value={currentWord}
        onChangeText={setCurrentWord}
        onSubmitEditing={handleAddWord}
      />
      <Button title="Add" onPress={handleAddWord} />

      <ScrollView style={styles.listContainer}>
        {wordList.map((word, index) => (
          <Text key={index} style={styles.listItem}>
            {word}
          </Text>
        ))}
      </ScrollView>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  listContainer: {
    width: "100%",
    marginBottom: 20,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default WordListForm;
