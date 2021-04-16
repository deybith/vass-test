import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@models/user.model';
import { UserService } from '@service/user.service.ts.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { UserForm } from '@models/user-form.model';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.sass']
})
export class CreateUpdateComponent implements OnInit {
  id: string | null = null;

  basicDataForm;

  addressForm;

  companyForm;

  userForm;

  user: User | null = null;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
  ) {


    this.userForm = new UserForm();

    this.basicDataForm = this.formBuilder.group(this.userForm.getBasicDataFormated());

    this.addressForm = this.formBuilder.group(this.userForm.getAddressDataFormated());

    this.companyForm = this.formBuilder.group(this.userForm.getCompanyDataFormated());
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUserById();

    /*this.getUserById(); */
  }

  getUserById() {
    if (this.id) {
      this.userService.getUser(this.id)
        .subscribe(
          user => {
            this.user = user;
            this.loadUser();
          },
          error => console.log(error)
        )
    }
  }

  loadUser() {
    if (this.user) {
      this.basicDataForm.patchValue(this.user);
      this.addressForm.patchValue(this.user.address);
      this.companyForm.patchValue(this.user.company);
    }


  }

  onSave() {

    const newData = {
      ...this.basicDataForm.value,
      address: this.addressForm.value,
      company: this.companyForm.value
    } as unknown as User;

    console.log(this.basicDataForm, 'this.basicDataForm.valid');


    if (
      this.basicDataForm.valid &&
      this.addressForm.valid &&
      this.companyForm.valid
    ) {
      if (this.user) {
        this.userService.update(this.user.id, newData)
          .subscribe(
            user => {
              this.user = user;
              this.router.navigate(['users']);
            },
            error => console.log(error)
          )
      } else {
        this.userService.create(newData)
          .subscribe(
            user => {
              this.router.navigate(['users']);
            },
            error => console.log(error)
          )
      }
    }
  }

}
