import { IPessenger } from './interfaces';

interface ITrain {
  route: { start: string; end: string };
  countSize: number;
  countPessenger: number;
}

type route = {start:string, end:string}


export class Train<ITrain> {
  route;
  countSize;
  countPessenger;
  constructor(route: route, countSize: number) {
    this.route = route;
    this.countSize = countSize;
  }

  addPessenger(Pessenger: IPessenger){
    if (this.countPessenger  < this.countSize.length) {
      this.countPessenger++;}
      else {
        return 'The Train is full'
      }
  }
}