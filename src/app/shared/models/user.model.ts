import { Address } from './address.model';
import { Company } from './company.model';

export class User {
  id: string = '';
  name: string = '';
  username: string = '';
  email: string = '';
  // @ts-ignore
  address: Address;
  phone: string = '';
  website: string = '';
  // @ts-ignore
  company: Company;
}
