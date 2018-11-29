
import * as fromEventsState from './events/events.reducers';
import { eventsReducer } from './events/events.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  eventsState: fromEventsState.EventsState;
}

export const reducers: ActionReducerMap<AppState> = {
  eventsState: eventsReducer
};
