import { createAction, props } from "@ngrx/store";


export const increment = createAction('increment')


export const decrement = createAction('decrement')


export const reset = createAction('reset')
export const addDynamically = createAction('addDynamically',props<{value:number}>());

export const changeChannelName = createAction('changeChannelName')