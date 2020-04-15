const WEATHER_API_KEY = process.env.VUE_APP_WEATHER_API_KEY;
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/onecall?appid=${WEATHER_API_KEY}&units=metric`;
const GEO_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}&q=`;
const ADDRESS_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

async function getCoordinates(location) {
  try {
    const response = await fetch(`${GEO_API_URL}${location}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getForecast(lat, lon) {
  try {
    const response = await fetch(`${WEATHER_API_URL}&lat=${lat}&lon=${lon}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getAddress(lat, lon) {
  try {
    const response = await fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lon}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export default {
  getForecast,
  getCoordinates,
  getAddress
};
