import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const SongDetails = ({ song }) => {
  if (!song) return null; // Avoid rendering if no song is selected

  return (
    <View style={styles.container}>
      <Image source={{ uri: song.image }} style={styles.image} />
      <Text style={styles.title}>{song.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SongDetails;
