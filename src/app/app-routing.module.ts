
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './_helpers';

// leazy loaded modules
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const homesModule = () => import('./home/home.module').then(x => x.HomeModule);
const listModule = () => import('./list/list.module').then(x => x.ListModule);


const routes: Routes = [
  // routes for app  
    { path: '', component: LayoutComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'home', loadChildren: homesModule },
    { path: 'list', loadChildren: listModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }