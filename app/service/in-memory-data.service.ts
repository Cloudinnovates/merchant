import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let todays = [
    {value: 100.00, name: 'Sales'},
    {value: 15, name: 'Visits'},
    {value: 100, name: 'Points'}
    ];
    return {todays};
  }
}