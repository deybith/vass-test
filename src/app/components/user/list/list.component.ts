import { Component, OnInit } from '@angular/core';

import { ModalDetailComponent } from '@components/user/modal-detail/modal-detail.component';

// material
import { MatDialog } from '@angular/material/dialog';

import { User } from '@models/user.model';
import { UserService } from '@service/user.service.ts.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  displayedColumns: String[] = ['id', 'name', 'email', 'phone', 'actions']
  users: User[] = [];
  currentUser: null | User = null;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(): void {
    this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        },
        error => console.log(error)
      );
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  openDialogUserDetail(user: User) {
    const dialogRef = this.dialog.open(ModalDetailComponent, {
      data: {
        ...user
      },
      //width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  edit(user: User) {
    this.router.navigateByUrl('/user');
  }

  delete(user: User) {
    if (confirm(`¿Seguro quieres borrar a ${user.name}?`)) {
      this.userService.delete(user.id)
        .subscribe(
          _response => {
            this.readUsers()
          },
          error => console.log(error)
        );
    }
  }

}
