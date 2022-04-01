import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list-user/list.component';
import { AddEditComponent } from './add-user/add-edit.component';
import { HomeContainerComponent } from './home-container.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [AddEditComponent,ListComponent,HomeContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  exports:[ListComponent]
})
export class HomeModule { }
