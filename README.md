# 🌦️ Weather Finder App

A responsive web app that lets users search for weather information by city name. Built using **React** and styled with **CSS Modules**.

---

## 📦 Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/aditithakur9417/Weather-Based-Outfit-Recommender.git
    cd weather-finder-app

2. **Install dependencies:**

    npm install

3. **Running the App Locally:**

    After installing the dependencies, start the Vite development server with:

    ```bash
    npm run dev

    The app will run at:
    http://localhost:5173 (or whichever port Vite assigns)


### Key Features:
- **API Integration**: Fetches real-time weather data using the OpenWeatherMap API.
- **Manual Fetching**: Weather data is retrieved only when the "Get Weather" button is clicked.
- **Autocomplete Suggestions**: Provides city name suggestions without auto-fetching data.
- **Responsive Design**: Mobile-friendly layout using flexbox for seamless usability.
- **Scoped Styling**: Utilizes CSS Modules for clean and maintainable styling.
- **Error Handling**: Displays basic error messages for invalid input or API issues.

### Future Improvements (Optional):
- **Unit Testing**: Add unit tests using Jest to ensure code reliability and catch potential bugs.
- **Geolocation Support**: Implement functionality to fetch weather data based on the user's current location.
- **Type Safety**: Refactor the codebase to use TypeScript for improved type safety and developer experience.

### Folder Structure
src/
└── components/
    ├── Layout/
    │   ├── MainLayout.jsx
    │   ├── MainLayout.module.css
    │   └── Header/
    │       ├── Header.jsx
    │       └── Header.module.css
    ├── CitySearch/
    │   ├── CitySearch.jsx
    │   └── CitySearch.module.css
    ├── WeatherCard/
    │   ├── WeatherCard.jsx
    │   └── WeatherCard.module.css
    ├── OutfitSuggestion/
    │   ├── OutfitSuggestion.jsx
    │   └── OutfitSuggestion.module.css
    └── SearchHistory/
        ├── SearchHistory.jsx
        └── SearchHistory.module.css
