export const getWeatherTemperatureSummary = (data) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  data.forEach((dayData) => {
    const { min_temp: minTemp, max_temp: maxTemp, the_temp: theTemp } = dayData;
    if (minTemp === null) {
      if (theTemp < min) {
        min = theTemp;
      }
    } else if (minTemp < min) {
      min = minTemp;
    }

    if (maxTemp === null) {
      if (theTemp > max) {
        max = theTemp;
      }
    } else if (maxTemp > max) {
      max = maxTemp;
    }
  });

  return { min: min.toFixed(2), max: max.toFixed(2) };
};
