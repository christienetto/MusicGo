# MusicGo 🎶

**Intantly publicly deploy a self-hosted music player app built with Expo Go, Golang, and Ngrok. Develop app on linux or windows for IOS!!!**

Have you ever wondered if you can develop IOS applications fast without cable or an Apple computer/Mac? Develop IOS applications with hot-reload on linux or windows with MusicGo! 

MusicGo empowers you to stream your personal music library from a Golang server, accessible from anywhere using Ngrok. Your front end Expo Go written in react-native is also deployed with ngrok which is perfect for enjoying your tunes on the go with complete control! 

## Getting Started

### Prerequisites
- Node.js and npm
- Go
- Ngrok (Free plan is sufficient for personal use)

### Project Structure
MusicGo/
├── frontend/                 # Expo Go front-end code
│   ├── components/           # Reusable React components
│   ├── assets/               # Images, icons, etc.
│   ├── App.js                # Main entry point for the frontend app
│   └── ...                   # Other frontend files
└── backend/                  # Go server files
├── music/                # Directory containing your audio files (.mp3 preferred)
├── main.go               # Go server code
└── ...                   # Other backend files


### Setup Instructions
1. **Clone the Repository:**

   git clone URL

cd frontend
npm install


Update Environment Settings:
Frontend (App.js):
Update the API_URL constant with your Ngrok URL (e.g., https://<your_ngrok_subdomain>.ngrok-free.app/api/songs).
Backend (main.go):
Ensure music file paths are accurate and accessible by the server.



cd ../backend
go run main.go


ngrok http 8080


Copy the generated Ngrok URL and update API_URL in frontend/App.js.

Run the Frontend (Expo):

cd ../frontend
npx expo start --tunnel



Features
Music Playback Control
Song Search
Responsive UI
Dynamic Music Loading
UI Components
Search Bar
Now Playing Display
Playback Controls
Screenshots


Troubleshooting
Ngrok URL Changes: Update API_URL in App.js if the Ngrok URL changes.
CORS Errors: Configure your Go server with CORS to allow requests from your app.
Contributing
We welcome contributions! Fork the repository and submit a pull request.
