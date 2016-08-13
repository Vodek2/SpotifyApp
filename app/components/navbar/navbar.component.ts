import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
// import myGlobals = require('../../my_globals'); //<==== this one

@Component({
    moduleId:module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent { }
