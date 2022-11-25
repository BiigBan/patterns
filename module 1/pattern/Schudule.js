

class Schudule {
  pessengerInfo;
  cities;
  time;

  calculateTime(
    pessengerInfo,
    cities,
    time,
  ) {
    let pointA = pessengerInfo.pointA;
    let pointB = pessengerInfo.pointB;
    let pointAIndex = cities.indexOf(pointA);
    let pointBIndex = cities.indexOf(pointB);
    let cacheCity= [];
    let resultTime = 0;
    if (pointAIndex < pointBIndex) {
      for (let i = pointAIndex; i <= pointBIndex; i++) {
        cacheCity.push(cities[i]);
        resultTime += +time[i];
      }
    } else {
      for (let i = pointBIndex; i <= pointAIndex; i++) {
        cacheCity.push(cities[i]);
        resultTime += +time[i];
      }
    }
    return resultTime;
  }
}

module.exports = { Schudule };
