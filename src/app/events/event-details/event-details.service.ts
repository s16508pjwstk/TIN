import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventDTO} from '../create-event-types';
import {Observable} from 'rxjs';
import {SessionDTO} from './event-details.types';
import {ISessionHibernate} from '../shared/event.model';

@Injectable()
export class EventDetailsService {
  constructor(private httpClient: HttpClient) { }

  public postSession(session: ISessionHibernate): Observable<ISessionHibernate> {
    console.log('possst')
    return this.httpClient.post<ISessionHibernate>('http://localhost:4202/createSession', session);
  }
}
