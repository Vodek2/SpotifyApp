import { bootstrap }    from '@angular/platform-browser-dynamic';
import {appRouterProviders} from './app.routes';
import { AppComponent  } from './app.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {SharedService} from './shared.service';

bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms(),
    SharedService
    ]);
