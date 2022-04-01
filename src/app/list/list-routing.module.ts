import { UsersLayoutComponent } from './users-layout.component';
import { UsersComponent } from './users/users.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {
    path: '', component: UsersLayoutComponent,
    children: [
       
      { path: '', redirectTo:'users'},
      { path: 'users', component: UsersComponent },      
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
