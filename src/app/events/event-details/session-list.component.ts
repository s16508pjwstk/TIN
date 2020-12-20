import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISession, ISessionHibernate} from '../shared/event.model';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges, OnInit {
  // @Input()
  // public sessions: ISession[];
  @Input()
  public eventId: number
  @Input()
  public filterBy: string;
  @Input()
  public sortBy: string;
  public visibleSessions: ISessionHibernate[] = [];

  private sessions: ISessionHibernate[];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getSessions(this.eventId).subscribe(res => {
      console.log(JSON.stringify(res));
      this.visibleSessions = res;
    }, error => {});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      if (this.sortBy === 'name') {
        this.visibleSessions.sort(sortByNameAsc);
      }
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }



}

function sortByNameAsc(s1: ISessionHibernate, s2: ISessionHibernate) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
