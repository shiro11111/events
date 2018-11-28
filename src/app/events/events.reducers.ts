import { AppEvent } from '../events-interface';
import { EventsActions, LOAD_EVENTS_LIST, LOAD_EVENTS_LIST_FAIL, LOAD_EVENTS_LIST_SUCCESS } from './events.actions';

export interface EventsState {
  list: AppEvent[];
}

const initialState: EventsState = {
  list: []
};

export function eventsReducer(state = initialState, action: EventsActions) {
  switch (action.type) {
    case LOAD_EVENTS_LIST:
      return {
        ...state,
        list: []
      };
    case LOAD_EVENTS_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case LOAD_EVENTS_LIST_FAIL:
      return {
        ...state
      };
    default :
      return state;
  }

}
