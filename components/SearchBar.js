import React from "react";
import { StyleSheet, TextInput } from "react-native";

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search for a song..."
      value={searchQuery}
      onChangeText={onSearch}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default SearchBar;
