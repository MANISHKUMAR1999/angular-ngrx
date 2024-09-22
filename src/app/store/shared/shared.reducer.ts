import { Action, createReducer, on } from "@ngrx/store"
import { initialState, sharedState } from "./shared.state"
import { setLoadingSpinner } from "./shared.actions"




const _sharedReducer = createReducer(initialState,
    on(setLoadingSpinner,(state,action)=>{
        return {
            ...state,
            showLoadingSpinner:action.status
        }
    })
)

export function  SharedReducer(state: sharedState | undefined,action: Action){
    return _sharedReducer(state,action)
}