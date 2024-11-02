import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Linking } from "react-native";
import { DrawerActions } from "@react-navigation/native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>I love meda!!!!!!</Text>
      <Text style={styles.infoText}>
        Discover and listen to your favorite music!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1E90FF", // Cool blue background
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff", // White text for contrast
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#ffffff", // White text for contrast
  },
  projectsButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#FF6347", // Tomato color for the projects button
    borderRadius: 5, // Rounded corners
    width: "100%", // Full width for better visibility
    alignItems: "center", // Center the text inside
  },
  projectsButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", // White text for contrast
  },
});

export default Home;
