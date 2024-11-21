# 🎶 **MusicGo** – Stream Your Tunes On the Go! 🚀

**Instantly deploy a self-hosted music player app built with Expo Go, Golang, and Ngrok. Develop and stream music on Linux or Windows for iOS, no Apple computer required!**

---

## 🌟 **Overview**

Have you ever wished you could develop and test iOS applications without a Mac or cables? With **MusicGo**, you can! 

MusicGo allows you to easily develop and stream music applications by leveraging **Expo Go**, **Golang**, and **Ngrok**. Enjoy seamless hot-reloading while developing iOS apps on Linux or Windows and access your personal music library from anywhere.

Whether you're on the go or relaxing at home, **MusicGo** has you covered with full control of your tunes anytime, anywhere! 🎵

---

## 🚀 **Getting Started**

### 🔧 **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js** and **npm** (for the Expo Go frontend)
- **Go** (for the Golang server backend)
- **Ngrok** (Free plan works perfectly for personal use)

---

### 🛠 **Setup Instructions**

- **Clone the Repository** and navigate to the `frontend` and `backend` directories.
  
- **Frontend (App.js):**  
  Update the `API_URL` constant with your Ngrok URL (e.g., `https://<your_ngrok_subdomain>.ngrok-free.app/api/songs`).

- **Backend (main.go):**  
  Ensure the music file paths are correct and accessible by the server.

- **Start Ngrok** to expose the server to the internet, and then run the backend and frontend apps.

---

## ✨ **Features**

- 🎶 **Music Playback Control**  
   Play, pause, and skip songs with ease.

- 🔍 **Song Search**  
   Search for your favorite tunes quickly.

- 📱 **Responsive UI**  
   Enjoy a fluid and responsive user interface on any device.

- ⚡ **Dynamic Music Loading**  
   Automatically load and play your music library without hassle.

- 🖥 **UI Components**  
   - Search Bar
   - Now Playing Display
   - Playback Controls

---

## 📸 **Screenshots**

Here are some previews of **MusicGo** in action:

![Screenshot 1](https://via.placeholder.com/500x300.png?text=Screenshot+1)  
_Your music library at your fingertips!_

![Screenshot 2](https://via.placeholder.com/500x300.png?text=Screenshot+2)  
_Enjoy music with full playback control._

---

## 🛠 **Troubleshooting**

- **Ngrok URL Changes:**  
   If your Ngrok URL changes, make sure to update the `API_URL` in `App.js` accordingly.

- **CORS Errors:**  
   If you're facing CORS issues, ensure your Go server is configured to allow requests from your Expo Go app.

---

## 💡 **Contributing**

We welcome contributions to **MusicGo**! Feel free to fork the repository and submit a pull request. Whether it's fixing bugs, adding features, or improving documentation, your help is always appreciated!

---

### 💬 **Contact & Support**

If you encounter any issues or need help, feel free to open an issue on the GitHub repository or contact us through [email@example.com].

---

## 🔄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy streaming your music anytime, anywhere with **MusicGo**! 🎧
