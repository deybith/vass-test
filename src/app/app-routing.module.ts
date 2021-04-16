import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '@components/user/list/list.component';
import { CreateUpdateComponent } from '@components/user/create-update/create-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ListComponent },
  { path: 'users/new', component: CreateUpdateComponent },
  { path: 'users/edit/:id', component: CreateUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
