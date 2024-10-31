import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";

const SongList = ({ songs, selectSong, currentSongIndex }) => {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.item, currentSongIndex === index && styles.selectedItem]}
      onPress={() => selectSong(index)}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={songs}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedItem: {
    backgroundColor: "#e0e0e0",
  },
  itemText: {
    fontSize: 16,
  },
});

export default SongList;
