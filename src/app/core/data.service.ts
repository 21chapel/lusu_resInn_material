import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../../app/shared/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  baseUrl = 'assets/';

  constructor( private http: HttpClient) { }


  getEvents(day?: string, location?: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl + 'events.json')
      .pipe(
        map(events => {
          const event = events.filter((e: Event) => e.date === day && e.city === location);
          return event;
        }),
      );
  }

  getEvent(id: number): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl + 'events.json')
      .pipe(
        map(events => {
          const event = events.filter((e: Event) => e.id === id);
          return event;
        }),
      );
  }



}
