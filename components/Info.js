import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

const Info = () => {
  const openProjectsPage = () => {
    Linking.openURL("https://christienetto.github.io/web/pages/projects");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.infoText}>
        Hello! I'm a passionate developer who loves creating applications that
        enhance user experiences. This project, MusicGo, is a music streaming
        application that allows users to discover and listen to their favorite
        songs.
      </Text>
      <Text style={styles.infoText}>
        My goal is to continually improve my skills and deliver innovative
        solutions in the tech industry. I'm particularly interested in
        full-stack development and mobile applications.
      </Text>
      <TouchableOpacity
        style={styles.projectsButton}
        onPress={openProjectsPage}
      >
        <Text style={styles.projectsButtonText}>View My Projects</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E90FF", // Cool blue background
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff", // White text for contrast
  },
  infoText: {
    fontSize: 16,
    color: "#ffffff", // White text for contrast
    marginBottom: 15,
  },

  projectsButton: {
    marginTop: 20,
    paddingVertical: 50, // Increase vertical padding
    paddingHorizontal: 30, // Increase horizontal padding
    backgroundColor: "#003366", // Tomato color for the button
    borderRadius: 5,
    alignItems: "center",
    elevation: 5, // Add some elevation for a shadow effect (Android)
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  projectsButtonText: {
    fontSize: 20, // Increase font size for better visibility
    fontWeight: "bold",
    color: "#ffffff", // White text for contrast
  },
});

export default Info;
