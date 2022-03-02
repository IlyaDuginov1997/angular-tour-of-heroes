import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from './hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Dima'},
      {id: 12, name: 'Ilya'},
      {id: 13, name: 'Artem'},
      {id: 14, name: 'Nikita'},
      {id: 15, name: 'Mark'},
      {id: 16, name: 'Maxim'},
      {id: 17, name: 'Ilya'},
    ]
    return {heroes}
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11
  }
}
