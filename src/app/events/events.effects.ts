import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EventsService } from './events.service';
import {  map, switchMap } from 'rxjs/operators';
import { AppEvent } from '../events-interface';
import { LoadEventsListSuccess } from './events.actions';

@Injectable()
export class EventsEffects {
  constructor(private actions$: Actions,
              private service: EventsService) {}

  @Effect() loadEventsList$ = this.actions$.pipe(
    ofType('LOAD_EVENTS_LIST'),
    switchMap(() => this.service.loadEvents().pipe(
      map((res: AppEvent[]) => new LoadEventsListSuccess(res))
    ))
  );
}


