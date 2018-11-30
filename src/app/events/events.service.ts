import {Injectable} from '@angular/core';
import {AppEvent} from '../events-interface';
import {Observable, of, throwError} from 'rxjs';
import {EventUtil} from '../events-shared/utils/event.util';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  loadEvents(): Observable<AppEvent[]> {
    return of(EventUtil.getEventsList());
  }

  loadEventDetails(id: number): Observable<AppEvent> {
    console.log(id);
    if (!!EventUtil.getEventDetails(+id)) {
      return of(EventUtil.getEventDetails(+id));
    } else {
      return of(null);
    }
  }
}
