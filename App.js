import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Keyboard, SafeAreaView } from "react-native";
import { Audio } from "expo-av"; // Import the Audio API
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SongDetails from "./components/SongDetails";
import SongControls from "./components/SongControls";
import SongList from "./components/SongList";

const API_URL = "https://4163-87-92-60-254.ngrok-free.app/api/songs";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const soundRef = useRef(new Audio.Sound()); // Create a ref for the audio

  useEffect(() => {
    fetchData();
    return () => {
      soundRef.current.unloadAsync(); // Unload the sound on cleanup
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = data.filter((song) =>
        song.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Reset to original data
    }
  };

  const playSong = async (index) => {
    // Stop the currently playing song if there is one
    if (soundRef.current) {
      await soundRef.current.stopAsync();
    }

    // Load and play the new song
    const song = filteredData[index];
    const { uri } = song;

    try {
      await soundRef.current.loadAsync({ uri });
      await soundRef.current.playAsync();
      setCurrentSongIndex(index);
    } catch (error) {
      console.error("Error loading or playing the sound:", error);
    }
  };

  const selectSong = (index) => {
    playSong(index);
    Keyboard.dismiss(); // Dismiss keyboard when a song is selected
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <SongDetails song={filteredData[currentSongIndex]} />
      <SongControls
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        filteredData={filteredData}
        selectSong={selectSong}
      />
      <SongList
        songs={filteredData}
        selectSong={selectSong}
        currentSongIndex={currentSongIndex}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10, // Adjust if necessary
    backgroundColor: "#fff",
  },
});

export default App;
