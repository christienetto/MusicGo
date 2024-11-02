import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Music App</Text>
      <Text style={styles.infoText}>
        Discover and listen to your favorite music!
      </Text>
      <Button
        title="Go to Song List"
        onPress={() => navigation.navigate("SongList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
});

export default Home;
