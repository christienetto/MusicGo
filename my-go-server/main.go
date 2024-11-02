package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Song struct {
	Title      string `json:"title"`
	URL        string `json:"url"`
	IsPlaylist bool   `json:"is_playlist"` // New field to indicate if it's a playlist
}

// Function to get the list of songs from the "music" directory
func getSongsFromMusicDir() ([]Song, error) {
	var songs []Song
	musicDir := "music"

	// Read the directories and files in the music directory
	entries, err := os.ReadDir(musicDir)
	if err != nil {
		return nil, err
	}

	for _, entry := range entries {
		if entry.IsDir() { // If it's a directory, treat it as a playlist
			playlistName := entry.Name()
			// Read the files in each playlist directory
			files, err := os.ReadDir(filepath.Join(musicDir, playlistName))
			if err != nil {
				return nil, err
			}

			// Add the playlist as a song entry
			songs = append(songs, Song{Title: playlistName, URL: "", IsPlaylist: true})

			for _, file := range files {
				if !file.IsDir() && filepath.Ext(file.Name()) == ".mp3" { // Ensure it's an .mp3 file
					songTitle := file.Name()
					songURL := "https://16e2-178-55-180-115.ngrok-free.app/music/" + playlistName + "/" + songTitle
					songs = append(songs, Song{Title: songTitle, URL: songURL, IsPlaylist: false})
				}
			}
		} else if !entry.IsDir() && filepath.Ext(entry.Name()) == ".mp3" { // If it's a file, add it directly
			songTitle := entry.Name()
			songURL := "https://16e2-178-55-180-115.ngrok-free.app/music/" + songTitle
			songs = append(songs, Song{Title: songTitle, URL: songURL, IsPlaylist: false})
		}
	}

	return songs, nil
}
func getSongsInPlaylist(w http.ResponseWriter, r *http.Request) {
	playlistName := mux.Vars(r)["playlistName"] // Get the playlist name from the URL
	var songs []Song
	playlistPath := filepath.Join("music", playlistName)

	// Read the files in the specified playlist directory
	files, err := os.ReadDir(playlistPath)
	if err != nil {
		http.Error(w, "Unable to get songs", http.StatusInternalServerError)
		return
	}

	for _, file := range files {
		if !file.IsDir() && filepath.Ext(file.Name()) == ".mp3" { // Ensure it's an .mp3 file
			songTitle := file.Name()
			songURL := "https://16e2-178-55-180-115.ngrok-free.app/music/" + playlistName + "/" + songTitle
			songs = append(songs, Song{Title: songTitle, URL: songURL, IsPlaylist: false})
		}
	}

	// Return the songs in the specified playlist
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(songs)
}

func getSongs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// Call the correct function
	songs, err := getSongsFromMusicDir()
	if err != nil {
		http.Error(w, "Unable to get songs", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(songs)
}

func serveMusicFiles(w http.ResponseWriter, r *http.Request) {
	// Extract the relative path after /music/
	relativePath := r.URL.Path[len("/music/"):]      // Get the path after /music/
	filePath := filepath.Join("music", relativePath) // Construct the full file path

	log.Printf("Serving file: %s", filePath) // Log the file being served

	http.ServeFile(w, r, filePath)
}

func main() {
	router := mux.NewRouter()

	// Serve the list of songs
	router.HandleFunc("/api/songs", getSongs).Methods("GET")

	// Serve music files from the "music" directory
	router.PathPrefix("/music/").HandlerFunc(serveMusicFiles)

	// Enable CORS
	http.Handle("/", handlers.CORS()(router))

	// Serve songs in a specific playlist
	router.HandleFunc("/api/songs/{playlistName}", getSongsInPlaylist).Methods("GET")

	// Start the server
	log.Println("Server starting on :8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("ListenAndServe: %v", err)
	}
}
