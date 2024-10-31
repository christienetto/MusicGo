import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Audio } from "expo-av";

const SongControls = ({
  currentSongIndex,
  setCurrentSongIndex,
  filteredData,
  selectSong,
}) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    playSong();
    return () => {
      if (sound) {
        sound.unloadAsync(); // Cleanup sound on unmount
      }
    };
  }, [currentSongIndex]);

  const playSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: filteredData[currentSongIndex].url,
    });
    setSound(newSound);
    await newSound.playAsync();
    setIsPlaying(true);
  };

  const pauseSong = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % filteredData.length;
    setCurrentSongIndex(nextIndex);
    // Optionally, you could call selectSong(nextIndex) here if needed
  };

  const previousSong = () => {
    const prevIndex =
      (currentSongIndex - 1 + filteredData.length) % filteredData.length;
    setCurrentSongIndex(prevIndex);
    // Optionally, you could call selectSong(prevIndex) here if needed
  };

  const handleSelectSong = (index) => {
    setCurrentSongIndex(index);
    selectSong(index); // Call selectSong when a song is selected
  };

  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={previousSong} style={styles.button}>
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
      {isPlaying ? (
        <TouchableOpacity onPress={pauseSong} style={styles.button}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={playSong} style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={nextSong} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default SongControls;
