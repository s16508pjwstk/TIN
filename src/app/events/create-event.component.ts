import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventService} from './shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }

    .form-container {
      margin-left: 500px;
      margin-top: 50px;
      max-width: 200px;
    }
    form div {
      margin: 15px;
    }
    h3,h1 {
      color: lightgray;
    }
    label {
      color: lightgray;
    }
    .sessions-buttons {
      background-color: #4E5D6C;
      border: none;
      color: white;
      padding: 7px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
  `]
})
export class CreateEventComponent {
  public newEvent;
  private isDirty = true;
  constructor(private router: Router, private eventService: EventService) {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

}
