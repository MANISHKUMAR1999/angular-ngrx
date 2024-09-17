import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { addDynamically, changeChannelName, decrement, increment, reset } from './counter.actions';

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

  }),
  on(changeChannelName,(state,action)=>{
    return {
        ...state,
        channelName:'Modified Channel Namae'
      };

  })
);

export function counterReducer(
  state: { counter: number , channelName:string} | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
