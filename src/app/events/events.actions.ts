import { Action } from 'ngrx-store';
import { AppEvent } from '../events-interface';
import { HttpErrorResponse } from '@angular/common/http';

export const LOAD_EVENTS_LIST = 'LOAD_EVENTS_LIST';
export const LOAD_EVENTS_LIST_SUCCESS = 'LOAD_EVENTS_LIST_SUCCESS';
export const LOAD_EVENTS_LIST_FAIL = 'LOAD_EVENTS_LIST_FAIL';

export class LoadEventsList implements Action {
  readonly type = LOAD_EVENTS_LIST;
}

export class LoadEventsListSuccess implements Action {
  readonly type = LOAD_EVENTS_LIST_SUCCESS;

  constructor(public payload: AppEvent[]) {}
}

export class LoadEventsListFail implements Action {
  readonly type = LOAD_EVENTS_LIST_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export type EventsActions = LoadEventsList | LoadEventsListSuccess | LoadEventsListFail;
