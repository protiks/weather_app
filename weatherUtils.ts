import few_clouds from './assets/few_clouds.json' 
import scattered_clouds from './assets/scattered_clouds.json';
import rain from './assets/rain.json';
import broken_clouds from './assets/broken_clouds.json';
import thunderstorm from './assets/thunderstorm.json';
import snow from './assets/snow.json';
import mist from './assets/mist.json';
import clear_sky from './assets/clear_sky.json';

interface WeatherCodes {
  [key: string]: any;
}

export const getWeatherAnimation = (code: string | undefined) => {
  const weatherCodes: WeatherCodes = {
    'Clouds': few_clouds,
    'broken clouds': broken_clouds,
    'Rain': rain,
    'thunderstorm': thunderstorm,
    'snow': snow,
    'mist': mist,
    'clear sky': clear_sky,
    'scattered': scattered_clouds,
    'overcast clouds':  broken_clouds,
    'scattered clouds': scattered_clouds,
    'moderate rain': rain,
    'light rain': rain,
  };

  if (code && weatherCodes[code]) {
    return weatherCodes[code];
  }
  return weatherCodes['clear sky'];
};
