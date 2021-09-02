"use strict";

const minMax = {
  
   getMinWind (station){
    var value = station.readings[0].windSpeed;
    for (var i = 0; i < station.readings.length; i++) {
      console.log(station.readings[i].windSpeed)
      if (station.readings[i].windSpeed < value) {
        value = station.readings[i].windSpeed;
      }
    }
     return value;
  },
  
  getMaxWind (station){
    var value = station.readings[0].windSpeed;
    for (var i = 0; i < station.readings.length; i++) {
      console.log(station.readings[i].windSpeed)
      if (station.readings[i].windSpeed > value) {
        value = station.readings[i].windSpeed;
      }
    }
     return value;
  },
  
  getMinTemp (station){
    var value = station.readings[0].temperature;
    for (var i = 0; i < station.readings.length; i++) {
      console.log(station.readings[i].temperature)
      if (station.readings[i].temperature < value) {
        value = station.readings[i].temperature;
      }
    }
     return value;
  },
  
  getMaxTemp (station){
    var value = station.readings[0].temperature;
    for (var i = 0; i < station.readings.length; i++) {
      console.log(station.readings[i].temperature)
      if (station.readings[i].temperature > value) {
        value = station.readings[i].temperature;
      }
    }
     return value;
  },
  
  getMinPressure (station){
    var value = station.readings[0].pressure;
    for (var i = 0; i < station.readings.length; i++) {
      console.log(station.readings[i].pressure)
      if (station.readings[i].pressure < value) {
        value = station.readings[i].pressure;
      }
    }
     return value;
  },
  
  getMaxPressure (station){
    var value = station.readings[0].pressure;
    for (var i = 0; i < station.readings.length; i++) {
      console.log(station.readings[i].pressure)
      if (station.readings[i].pressure > value) {
        value = station.readings[i].pressure;
      }
    }
     return value;
  },
}

module.exports = minMax;