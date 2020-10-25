import {EventsListComponent} from './events/events-list.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  // { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  // { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  // { path: 'events/session/new', component: CreateSessionComponent },
  // { path: '404', component: Error404Component },
  // { path: '', redirectTo: '/events', pathMatch: 'full' },
  // { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  // { path: 'user', loadChildren: 'src/app/user/user.module#UserModule'},
];
