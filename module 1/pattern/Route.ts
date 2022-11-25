interface IRoute {
  cities: string[];
  countSize: number;
  countPessenger: number;
}


export type cities = string[];

export type time = number[]

export class Route<IRoute> {
  cities;
  length;
  private time: time;
  constructor(cities: cities, length: number) {
    this.cities = cities;
    this.length = length;
  }

  setTime(time: time) {
    if(this.cities.length === time.length){
    this.time = time;
    } else {
        return `Write a length to all stations: (Length: ${this.cities.length})` 
    }
  }
}
