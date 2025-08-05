export const getOutfitSuggestion = (weather) => {
    if (!weather || !weather.current || !weather.current.condition) return "Weather data unavailable";
  
    const condition = weather.current.condition.text.toLowerCase();
    const temp = weather.current.temp_c;
  
    if (condition.includes("rain")) {
      return "Carry an umbrella or wear a waterproof jacket.";
    } else if (condition.includes("snow")) {
      return "Wear warm clothes and snow boots.";
    } else if (temp < 10) {
      return "Wear a heavy jacket and layer up.";
    } else if (temp >= 10 && temp <= 20) {
      return "A light jacket or sweater should be fine.";
    } else {
      return "T-shirt and jeans weather!";
    }
  };
  