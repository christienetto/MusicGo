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
	Title string `json:"title"`
	URL   string `json:"url"`
}

// Function to get the list of songs from the "music" directory
func getSongsFromMusicDir() ([]Song, error) {
	var songs []Song
	musicDir := "music"

	// Read the files in the music directory
	files, err := os.ReadDir(musicDir)
	if err != nil {
		return nil, err
	}

	for _, file := range files {
		if !file.IsDir() { // Ensure it's a file, not a directory
			songTitle := file.Name()
			songURL := "https://4163-87-92-60-254.ngrok-free.app/music/" + songTitle
			songs = append(songs, Song{Title: songTitle, URL: songURL})
		}
	}

	return songs, nil
}

func getSongs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// Get the list of songs
	songs, err := getSongsFromMusicDir()
	if err != nil {
		http.Error(w, "Unable to get songs", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(songs)
}

func serveMusicFiles(w http.ResponseWriter, r *http.Request) {
	filePath := filepath.Join("music", filepath.Base(r.URL.Path)) // Ensure proper path handling
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

	// Start the server
	log.Println("Server starting on :8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("ListenAndServe: %v", err)
	}
}
