import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="container">
        <div style="padding-left: 250px" *ngFor="let event of events" class="col-md-5">
<!--        <div *ngFor="let event of events">-->
        <event-thumbnail style="padding: 30px 0px 30px 400px;" (click)="handleThumbnailClick(event.name)" [event] = event></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    console.log(JSON.stringify(this.eventService.getEvents()));
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    // this.toastr.success(eventName);
  }

}
