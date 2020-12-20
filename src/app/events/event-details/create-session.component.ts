import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession, ISessionHibernate} from '../shared/event.model';
// import {restrictedWords} from '../shared/restricted-words.validator';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    /*.sessions-buttons {*/
    /*    margin-top: 30px;*/
    /*    margin-left: 170px;*/
    /*}*/
    h3 {
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
    form div {
      padding: 10px;
    }

    form div label {
      margin-right: 50px;
    }
    input {
      width: 200px;
    }


    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
  @Input()
  public eventId: number
  @Output()
  public saveNewSession = new EventEmitter();
  @Output()
  public cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required])
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }


  saveSession(formValues): void {
    let session: ISessionHibernate = {
      id: undefined,
      eventId: this.eventId,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstractField: formValues.abstract,
      // voters: []
    }
    console.log(session)
    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit();
  }

}
