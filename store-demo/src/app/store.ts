import { createAction, Action } from '@ngrx/store';
import { CounterState } from './counters-state';

export const CHANGE = createAction('Change');
export const INCREMENT = createAction('Increment');
export const DECREMENT = createAction('Decrement');
export const RESET = createAction('Reset');

export const initialState: CounterState = {a: -5, b: 10};

export function counterReducer(state: CounterState = initialState, action: Action) {
  switch (action) {
    case INCREMENT:
      return {a: state.a + 1, b: state.b};

    case DECREMENT:
      return {a: state.a, b: state.b - 1};

    case RESET:
      return {a: -5, b: 10};

    default:
      return state;
  }
}
