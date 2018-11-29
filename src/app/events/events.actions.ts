import { AppEvent } from '../events-interface';
import { Action } from '@ngrx/store';

export const LOAD_EVENTS_LIST = 'LOAD_EVENTS_LIST';
export const LOAD_EVENTS_LIST_SUCCESS = 'LOAD_EVENTS_LIST_SUCCESS';
export const LOAD_EVENTS_LIST_FAIL = 'LOAD_EVENTS_LIST_FAIL';
export const LOAD_EVENTS_DETAILS = 'LOAD_EVENTS_DETAILS';
export const LOAD_EVENTS_DETAILS_SUCCESS = 'LOAD_EVENTS_DETAILS_SUCCESS';
export const LOAD_EVENTS_DETAILS_FAIL = 'LOAD_EVENTS_DETAILS_FAIL';

export class LoadEventsList implements Action {
  readonly type = LOAD_EVENTS_LIST;
}

export class LoadEventsListSuccess implements Action {
  readonly type = LOAD_EVENTS_LIST_SUCCESS;

  constructor(public payload: AppEvent[]) {}
}

export class LoadEventsListFail implements Action {
  readonly type = LOAD_EVENTS_LIST_FAIL;
}

export class LoadEventsDetails implements Action {
  readonly type = LOAD_EVENTS_DETAILS;
  constructor(public payload: number) {}
}

export class LoadEventsDetailsSuccess implements Action {
  readonly type = LOAD_EVENTS_DETAILS_SUCCESS;
  constructor(public payload: AppEvent) {}
}

export class LoadEventsDetailsFail implements Action {
  readonly type = LOAD_EVENTS_DETAILS_FAIL;
}

export type EventsActions = LoadEventsList | LoadEventsListSuccess | LoadEventsListFail | LoadEventsDetails | LoadEventsDetailsSuccess
  | LoadEventsDetailsFail;
