export const getOutfitSuggestion = (weather) => {
    const condition = weather.weather[0].main;
    const temp = weather.main.temp;
  
    if (condition.toLowerCase().includes("rain")) {
      return "Take an umbrella ☔";
    } else if (temp < 15) {
      return "Wear a warm jacket 🧥";
    } else if (condition.toLowerCase().includes("sun")) {
      return "Sunglasses recommended 😎";
    } else if (temp > 30) {
      return "Wear light clothing 👕";
    } else {
      return "Dress comfortably!";
    }
  };
  