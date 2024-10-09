
---

# Anime Truce

**Anime Truce** is a mobile and web application developed using the Ionic framework. The app provides users with a platform to explore and keep track of their favorite anime series, get the latest updates, and interact with other anime enthusiasts.

## Features

- **Anime Search**: Search for anime series and movies with details provided by the **Consumet API**.
- **Trending Anime**: Stay updated with the most popular and trending anime.
- **Watchlist**: Create and manage a personal watchlist. 
- **Anime Details**: View detailed information like synopsis, episodes, genre, and ratings.
- **User Profiles**: Create a personalized profile to track watch history.
- **Community**: Interact with other anime fans, share reviews, and join discussions.

## Tech Stack

- **Frontend**: Ionic Framework (with Angular and SCSS for styling)
- **Backend**: Firebase for user authentication, database, and cloud functions
- **API**: Utilizes the **Consumet API** for fetching anime details
- **Database**: Firebase Firestore for storing user data and watchlist informations

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/avishek999/Anime-Truce-ionic.git
   cd Anime-Truce-ionic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Set up Firestore and Firebase Authentication.
   - Add your Firebase config in the app's environment file.

4. Run the app:
   ```bash
   ionic serve
   ```

5. For Android/iOS builds:
   - Install required Cordova/Capacitor plugins.
   - Run the app on the emulator or device:
     ```bash
     ionic capacitor run android
     ```
     or
     ```bash
     ionic capacitor run ios
     ```

## Screenshots

> Include screenshots here to showcase the app's UI.

## Future Features

- **Push Notifications**: Get updates for new anime releases and recommendations.
- **Advanced Filtering**: Filter anime by genre, release year, and rating.
- **Offline Mode**: View watchlist and anime details offline.

## Contributing

Feel free to submit issues or pull requests if you would like to contribute to the development of **Anime Truce**. Contributions are welcome and appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
