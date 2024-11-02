import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SongDetails = ({ song }) => {
  if (!song) return null;

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{song.title}</Text>
      {/* Add more song details here if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SongDetails;
