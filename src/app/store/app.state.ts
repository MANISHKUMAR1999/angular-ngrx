import { postsReducer } from "../post/postlist/state/post.reducers";
import { PostsState } from "../post/postlist/state/post.state";
import { counterReducer } from "../state/counter.reducer";
import { Counter } from "../state/counter.state";


export interface AppState{
    counter:Counter,
    posts:PostsState
}

export const AppReducers  = {
    counter:counterReducer,
    posts:postsReducer
}