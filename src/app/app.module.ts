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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateEventComponent} from './events/create-event.component';
import {NavbarService} from './nav/navbar.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {CreateEventService} from './events/create-event.service';
import {EventDetailsService} from './events/event-details/event-details.service';

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
    CollapsibleWellComponent,
    CreateEventComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    NavbarService,
    CreateEventService,
    EventDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
