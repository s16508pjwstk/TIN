import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventDTO} from './create-event-types';

@Injectable()
export class CreateEventService {
  constructor(private httpClient: HttpClient) { }

  public postEvent(event: EventDTO): Observable<EventDTO> {
    return this.httpClient.post<EventDTO>('http://localhost:4202/createEvent', event);
  }
}
