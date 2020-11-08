import {EventsListComponent} from './events/events-list.component';
import {Routes} from '@angular/router';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {CreateEventComponent} from './events/create-event.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  // { path: 'events/session/new', component: CreateSessionComponent },
  // { path: '404', component: Error404Component },
  // { path: '', redirectTo: '/events', pathMatch: 'full' },
  // { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  // { path: 'user', loadChildren: 'src/app/user/user.module#UserModule'},
];
