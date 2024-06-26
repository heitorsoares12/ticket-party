import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_EVENTS } from './event.mock';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() {}

  getEvents(): Observable<any[]> {
    return of(MOCK_EVENTS);
  }

  getEventById(id: number): Observable<any> {
    const event = MOCK_EVENTS.find(e => e.id === id);
    return of(event);
  }
}
