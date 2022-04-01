import { UsersLayoutComponent } from './users-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';

import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';


@NgModule({
  declarations: [UsersLayoutComponent, UsersComponent,],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    HomeModule,
    ListRoutingModule,
  ]
})
export class ListModule { }
