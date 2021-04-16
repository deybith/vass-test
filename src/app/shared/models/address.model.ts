import { Geo } from './geo.model';

export class Address {
  street: String = '';
  suite: String = '';
  city: String = '';
  zipcode: String = '';
  // @ts-ignore
  geo: Geo;
}
