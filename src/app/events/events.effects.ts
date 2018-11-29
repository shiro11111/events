import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EventsService} from './events.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AppEvent} from '../events-interface';
import {
  LoadEventsDetails,
  LoadEventsDetailsFail,
  LoadEventsDetailsSuccess,
  LoadEventsListFail,
  LoadEventsListSuccess
} from './events.actions';
import {of} from 'rxjs';

@Injectable()
export class EventsEffects {
  constructor(private actions$: Actions,
              private service: EventsService) {
  }

  @Effect() loadEventsList$ = this.actions$.pipe(
    ofType('LOAD_EVENTS_LIST'),
    switchMap(() => this.service.loadEvents().pipe(
      map((res: AppEvent[]) => new LoadEventsListSuccess(res)),
      catchError((error: any) => of(new LoadEventsListFail(error)))
    ))
  );

}


