﻿import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    // variable decleration
    user: User;

    // variable decleration
    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    } 
       
    // logout method 
    logout() {
        this.accountService.logout();
    }
}