import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        {/* You can use DrawerItemList to render the default items, or customize them */}

        {/* Example of a custom sidebar button */}
        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => props.navigation.navigate("SongListScreen")}
        >
          <Text style={styles.buttonText}>Song List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => props.navigation.navigate("Info")}
        >
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sidebarButton: {
    marginTop: 20,
    paddingVertical: 20, // Increase vertical padding for a bigger button
    paddingHorizontal: 30, // Increase horizontal padding for a bigger button
    backgroundColor: "#003366", // Dark blue button background color
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center", // Center the text
  },
  buttonText: {
    fontSize: 18, // Adjust font size for visibility
    fontWeight: "bold", // Make text bold
    color: "#ffffff", // Text color
  },
});

export default CustomDrawerContent;
