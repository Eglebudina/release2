"use strict";

const trends = {
  getTrendTemp(station) {
  let temperature = station.readings[0].temperature;
  let trendTemp = "";
  if (station.readings.length >= 3) {
        if (station.readings[station.readings.length - 1].temperature > station.readings[station.readings.length - 2].temperature
          && station.readings[station.readings.length - 2].temperature > station.readings[station.readings.length - 3].temperature) {
                trendTemp = "arrow up";
            } else if (station.readings[station.readings.length - 1].temperature < station.readings[station.readings.length - 2].temperature
                    && station.readings[station.readings.length - 2].temperature < station.readings[station.readings.length - 3].temperature) {
                return "arrow down";
            } else
            return "arrows alternate horizontal";
        } else
            return "minus circle";
    },
  
//     getTrendWind(station) {
//         if (station,readings.length >= 3) {
//             if (readings.get(readings.size() - 1).windSpeed > readings.get(readings.size() - 2).windSpeed
//                     && readings.get(readings.size() - 2).windSpeed > readings.get(readings.size() - 3).windSpeed) {
//                 return "arrow up";
//             } else if (readings.get(readings.size() - 1).windSpeed < readings.get(readings.size() - 2).windSpeed
//                     && readings.get(readings.size() - 2).windSpeed < readings.get(readings.size() - 3).windSpeed) {
//                 return "arrow down";
//             } else
//                 return "arrows alternate horizontal";
//         } else
//             return "minus circle";
//     },

//      getTrendPressure(station)  {
//         if (readings.size() >= 3) {
//             if (readings.get(readings.size() - 1).pressure > readings.get(readings.size() - 2).pressure
//                     && readings.get(readings.size() - 2).pressure > readings.get(readings.size() - 3).pressure) {
//                 return "arrow up";
//             } else if (readings.get(readings.size() - 1).pressure < readings.get(readings.size() - 2).pressure
//                     && readings.get(readings.size() - 2).pressure < readings.get(readings.size() - 3).pressure) {
//                 return "arrow down";
//             } else
//                 return "arrows alternate horizontal";
//         } else
//             return "minus circle";
//     }
}
module.exports = trends;
  