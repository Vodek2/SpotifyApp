import { Component } from '@angular/core';
import {NavbarTopComponent} from './components/navbar-top/navbar-top.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarTopComponent]
})
export class AppComponent { }
