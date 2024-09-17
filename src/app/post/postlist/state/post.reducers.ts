import { Action, createReducer } from "@ngrx/store";
import { initialState, PostsState } from "./post.state";



const _PostReducer = createReducer(initialState)


export function postsReducer(state: PostsState | undefined,action: Action
  ) {
    return _PostReducer(state,action);
  }
  
