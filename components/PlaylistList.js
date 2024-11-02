import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";

const PlaylistList = ({ playlists, selectPlaylist }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => selectPlaylist(item.title)}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={playlists}
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
  itemText: {
    fontSize: 16,
  },
});

export default PlaylistList;
