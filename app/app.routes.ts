import {provideRouter, RouterConfig} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';

const routes: RouterConfig = [
    {path:'', component:SearchComponent},
    {path:'about', component: AboutComponent},
    {path:'artist/:id', component:ArtistComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];