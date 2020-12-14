import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {IEvent} from './shared/event.model';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="container">
        <div style="height: 210px; width: 460px; margin-right: 250px" *ngFor="let event of events" class="hoverwell">
<!--        <div *ngFor="let event of events">-->
        <event-thumbnail style="padding: 30px 0px 30px 400px;" (click)="handleThumbnailClick(event.name)" [event] = event></event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      margin-left: 100px;
      font-weight: bold;
      color: white;
    }
  `]
})
export class EventsListComponent implements OnInit {
  events: IEvent[] = [];
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    // console.log(JSON.stringify(this.eventService.getEvents()));
    this.eventService.getEvents().subscribe(res => {
      console.log(JSON.stringify(res));
      // for (const resKey in res) {
      //   this.events.push(res[resKey]);
      // }
      // console.log(JSON.stringify(this.events));
      this.events = res;
    }, error => console.log(JSON.stringify(error)));
    // this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    // this.toastr.success(eventName);
  }

}
