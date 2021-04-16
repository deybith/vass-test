import { Validators } from "@angular/forms";
import { Address } from "./address.model";
import { Company } from "./company.model";
import { User } from "./user.model";

interface ObjectStringKeys {
  [key: string]: any
}

export class UserForm {
  basicData: { key: (keyof User), label: String, placeholder: String, group: any[] }[] = [
    {
      key: 'name',
      label: 'Nombre',
      placeholder: 'Nombre',
      group: ['', Validators.required]
    },
    {
      key: 'email',
      label: 'Email',
      placeholder: 'Email',
      group: ['', Validators.required]
    },
    {
      key: 'phone',
      label: 'Telefono',
      placeholder: 'Telefono',
      group: ['', Validators.required]
    },
    {
      key: 'website',
      label: 'Sitio Web',
      placeholder: 'Sitio Web',
      group: ['', Validators.required]
    }
  ];

  addressData: { key: (keyof Address), label: String, placeholder: String, group: any[] }[] = [
    {
      key: 'street',
      label: 'Calle',
      placeholder: 'Calle',
      group: ['', Validators.required]
    },
    {
      key: 'suite',
      label: 'Apto',
      placeholder: 'Apto',
      group: ['', Validators.required]
    },
    {
      key: 'city',
      label: 'Ciudad',
      placeholder: 'Ciudad',
      group: ['', Validators.required]
    },
    {
      key: 'zipcode',
      label: 'Cp',
      placeholder: 'Cp',
      group: ['', Validators.required]
    }
  ];

  companyData: { key: (keyof Company), label: String, placeholder: String, group: any[] }[] = [
    {
      key: 'name',
      label: 'Nombre',
      placeholder: 'Nombre',
      group: ['', Validators.required]
    },
    {
      key: 'catchPhrase',
      label: 'Eslogan',
      placeholder: 'Eslogan',
      group: ['', Validators.required]
    },
    {
      key: 'bs',
      label: 'Tipo',
      placeholder: 'Tipo',
      group: ['', Validators.required]
    }
  ];



  converToInitObject(fieldsParams: ({ key: string, group: any })[]) {
    let fieldsFormat: ObjectStringKeys = {};

    fieldsParams.forEach(row => {
      fieldsFormat[row.key] = row.group;
    });

    return fieldsFormat;

  }

  getBasicDataFormated() {
    return this.converToInitObject(this.basicData)
  }

  getAddressDataFormated() {
    return this.converToInitObject(this.addressData)
  }

  getCompanyDataFormated() {
    return this.converToInitObject(this.companyData)
  }
}
