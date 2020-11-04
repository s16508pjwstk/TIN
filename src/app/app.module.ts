import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './nav/navbar.component';
import {RouterModule} from '@angular/router';
import {EventsListComponent} from './events/events-list.component';
import {EventService} from './events/shared/event.service';
import {appRoutes} from './routes';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {SessionListComponent} from './events/event-details/session-list.component';
import {CreateSessionComponent} from './events/event-details/create-session.component';
import {DurationPipe} from './events/shared/duration.pipe';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    SessionListComponent,
    CreateSessionComponent,
    DurationPipe,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    EventRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
