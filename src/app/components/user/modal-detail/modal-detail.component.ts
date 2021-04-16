import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Address } from '@models/address.model';
import { Company } from '@models/company.model';
import { UserForm } from '@models/user-form.model';
import { User } from '@models/user.model';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.sass']
})
export class ModalDetailComponent implements OnInit {

  basicData: { key: (keyof User), label: String }[];

  addressData: { key: (keyof Address), label: String }[];

  companyData: { key: (keyof Company), label: String }[];

  userForm;

  constructor(
    public dialogRef: MatDialogRef<ModalDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {
    this.userForm = new UserForm();

    this.basicData = this.userForm.basicData;

    this.addressData = this.userForm.addressData;

    this.companyData = this.userForm.companyData;
  }

  ngOnInit(): void {
  }

  edit(user: User) {

  }
}
