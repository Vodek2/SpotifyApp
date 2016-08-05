import { provideRouter, RouterConfig} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
// import { PageNotFoundComponent  } from './components/pages/page_not_found.component';

const routes: RouterConfig = [
    {path: '',component: SearchComponent},
  {path: 'about', component: AboutComponent},
//   {path: '**', component:PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];