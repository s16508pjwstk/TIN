import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class NavbarService {
  constructor(private httpClient: HttpClient) {}

  public testCore(): Observable<any> {
    return this.httpClient.get('http://localhost:4202/core');
  }


}
