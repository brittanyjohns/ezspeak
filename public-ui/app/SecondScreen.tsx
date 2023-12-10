import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, SafeAreaView, View, Text, Pressable } from "react-native";

const SecondScreen = () => {
  const { slug } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Second Screen : ${slug}</Text>

      <Link href="/" asChild>
        <Pressable>
          <Text>Navigate to index.js</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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
  textStyle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#38434D",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

export default SecondScreen;
