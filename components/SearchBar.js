// components/SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a song..."
        value={searchQuery}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, // Space between the search bar and other components
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
