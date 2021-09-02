'use strict';

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/station-analytics");
const minMax = require("../utils/min-max");
const trends = require("../utils/trends");
const uuid = require("uuid");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug('Station id = ', stationId);

    const station = stationStore.getStation(stationId);
    const windBeauford = stationAnalytics.getWindBeauford(station);
    console.log(windBeauford);
    const codeToText = stationAnalytics.getCodeToText(station);
    console.log(codeToText);
    const calculateCelcius = stationAnalytics.getCalculateCelcius(station);
    console.log (calculateCelcius);
    const calculateFahrenheit = stationAnalytics.getCalculateFahrenheit(station);
    console.log (calculateFahrenheit);
    const windDirection = stationAnalytics.getWindDirection(station);
    console.log (windDirection);
    const windChill = stationAnalytics.getWindChill(station);
    console.log (windChill);
    const pressure = stationAnalytics.getPressure(station);
    console.log (pressure);
    const minWind = minMax.getMinWind(station);
    console.log (minWind);
    const minTemp = minMax.getMinTemp(station);
    console.log (minTemp);
    const minPressure = minMax.getMinPressure(station);
    console.log (minPressure);
    const maxWind = minMax.getMaxWind(station);
    console.log (maxWind);
    const maxTemp = minMax.getMaxTemp(station);
    console.log (maxTemp);
    const maxPressure = minMax.getMaxPressure(station);
    console.log (maxPressure);
    const trendTemp = trends.getTrendTemp(station);
    console.log (trendTemp);

   
    const viewData = {
      title: "Station",
      station: stationStore.getStation(stationId),
      windBeauford : windBeauford,
      codeToText : codeToText,
      calculateCelcius: calculateCelcius,
      calculateFahrenheit: calculateFahrenheit,
      windDirection: windDirection,
      windChill: windChill,
      pressure: pressure,
      minWind: minWind,
      minTemp: minTemp,
      minPressure: minPressure,
      maxWind: maxWind,
      maxTemp: maxTemp,
      maxPressure: maxPressure,
      trendTemp: trendTemp,
   
    };
    response.render("station", viewData);
  },
  
  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  },
  
  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temperature: request.body.temperature,
      windSpeed: request.body.windSpeed,
      pressure: request.body.pressure,
      windDirection: request.body.windDirection,
    };
    stationStore.addReading(stationId, newReading);
    response.redirect('/station/' + stationId);
  },
  
};

module.exports = station;