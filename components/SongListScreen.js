import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import SearchBar from "./SearchBar";
import SongList from "./SongList";
import SongControls from "./SongControls";

const SongListScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "https://16e2-178-55-180-115.ngrok-free.app/api/songs"
      );
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const onSearch = (query) => {
    setSearchQuery(query);
    // Add search filtering logic here
  };

  const selectSong = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} onSearch={onSearch} />
      <SongList
        songs={filteredData}
        selectSong={selectSong}
        currentSongIndex={currentSongIndex}
      />
      <SongControls
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        filteredData={filteredData}
        selectSong={selectSong}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SongListScreen;
