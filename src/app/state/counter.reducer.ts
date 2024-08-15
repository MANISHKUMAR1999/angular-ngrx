import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { addDynamically, decrement, increment, reset } from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement,(state)=>{
    return {
        ...state,
        counter: state.counter - 1,
      };

  }),
  on(reset,(state)=>{
    return {
        ...state,
        counter:0,
      };

  }),
  on(addDynamically,(state,action)=>{
    return {
        ...state,
        counter:state.counter+action.value,
      };

  })
);

export function counterReducer(
  state: { counter: number } | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
