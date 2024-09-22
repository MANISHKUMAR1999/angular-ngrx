import { postsReducer } from "../post/postlist/state/post.reducers";
import { PostsState } from "../post/postlist/state/post.state";
import { counterReducer } from "../state/counter.reducer";
import { Counter } from "../state/counter.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selectors";
import { sharedState } from "./shared/shared.state";


export interface AppState{
   [SHARED_STATE_NAME] : sharedState
}

export const AppReducers  = {
   [SHARED_STATE_NAME] : SharedReducer
}