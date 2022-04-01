import { HomeContainerComponent } from './home-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list-user/list.component';
import { AddEditComponent } from './add-user/add-edit.component';

const routes: Routes = [
  {
    path: '', component: HomeContainerComponent,
    children: [
        { path: '', redirectTo:'list' },
        { path: 'list', component: ListComponent },
        { path: 'add', component: AddEditComponent },
        { path: 'edit/:id', component: AddEditComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
