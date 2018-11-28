import { Injectable } from '@angular/core';
import { AppEvent } from '../events-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  loadEvents(): Observable<AppEvent[]> {
    return
  }
}
