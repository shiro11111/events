import { AppEvent } from '../events-interface';
import {
  EventsActions,
  LOAD_EVENTS_DETAILS, LOAD_EVENTS_DETAILS_FAIL,
  LOAD_EVENTS_DETAILS_SUCCESS,
  LOAD_EVENTS_LIST,
  LOAD_EVENTS_LIST_FAIL,
  LOAD_EVENTS_LIST_SUCCESS
} from './events.actions';

export interface EventsState {
  list: AppEvent[];
  details: AppEvent;
}

const initialState: EventsState = {
  list: [],
  details: null
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
      return  {
        ...state
      };
    case LOAD_EVENTS_DETAILS:
    return {
      ...state,
    };
      case LOAD_EVENTS_DETAILS_SUCCESS:
        return {
          ...state,
          details: action.payload
        };
    case LOAD_EVENTS_DETAILS_FAIL:
      return {
        ...state,
      };
  }
}
