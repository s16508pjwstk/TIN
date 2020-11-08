import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  template: `

<!--  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">-->
<div [routerLink]="['/events', event.id]" class="well thumbnail">
    <h2 class="event-name">{{event.name}}</h2>
    <div>Date: {{event.date | date}}</div>
<!--    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">-->
  <div [ngSwitch]="event?.time">
      Time: {{event.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event.price | currency: 'USD'}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span>
<!--      <span class="pad-left"></span>-->
      <span></span>
      <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
      Online URL: {{event?.onlineUrl}}
    </div>
  </div>
`,
  styles: [`
    .event-name {
      font-weight: bold;
      color: white;
    }
    .green { color: #003300 !important;}
    .thumbnail {
      min-height: 210px;
      padding-left: 30px;
    }
    .pad-left {
      margin-left: 10px;
    }
    .well div {
      color: #bbb;
    }
    div {
      max-width: 400px;
    }
  `]
})

export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return 'green bold';
    } else {
      return '';
    }
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {
        color: '#003300', 'font-weight': 'bold'
      };
      return {};
    }
  }

}
