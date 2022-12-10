import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude())
    };
  }

  markerContent(): string {
    return `<div style="background: ${this.color};">
      <h1>Company Name: ${this.companyName}</h1>
      <h5>Catchphrase: ${this.catchPhrase}</h5>
    </div> 
    `;
  }
}
