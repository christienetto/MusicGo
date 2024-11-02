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
    if (currentSongIndex !== null) {
      playSong();
    }
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentSongIndex]);

  const playSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: filteredData[currentSongIndex]?.url,
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
  };

  const previousSong = () => {
    const prevIndex =
      (currentSongIndex - 1 + filteredData.length) % filteredData.length;
    setCurrentSongIndex(prevIndex);
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
    padding: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SongControls;
