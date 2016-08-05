import { Component } from '@angular/core';
import {NavbarTopComponent} from './components/navbar-top/navbar-top.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {SpotifyService} from './services/spotify.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarTopComponent],
    providers: [SpotifyService, HTTP_PROVIDERS]
})
export class AppComponent { }
