import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";

const SongList = ({ songs, selectSong, currentSongIndex }) => {
  return (
    <FlatList
      data={songs}
      keyExtractor={(item) => item.url}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => selectSong(index)}
          style={styles.songItem}
        >
          <Text
            style={
              currentSongIndex === index ? styles.activeSong : styles.songTitle
            }
          >
            {item.title.replace(".mp3", "")}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  songItem: {
    padding: 15,
  },
  songTitle: {
    fontSize: 16,
  },
  activeSong: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
});

export default SongList;
