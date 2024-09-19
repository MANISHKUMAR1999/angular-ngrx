import { Action, createReducer, on } from '@ngrx/store';
import { initialState, PostsState } from './post.state';
import { addPost, deletePost, updatePost } from './post.actions';

const _PostReducer = createReducer(
  initialState,
  on(addPost, (state, actions) => {
    let post = { ...actions.post };
    post.id = state.posts.length + 1;
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),

  on(updatePost,(state,actions)=>{
    const updatedPost = state.posts.map((post)=>{
      return actions.post.id === post.id ? actions.post : post
    })

    return {
      ...state,
      posts:updatedPost
    }

  }),

  on(deletePost,(state,action)=>{
    const updatedPost = state.posts.filter((post)=>{
      return post.id !== action.id
    })

    return {
      ...state,
      posts:updatedPost
    }
    
  })
);

export function postsReducer(state: PostsState | undefined, action: Action) {
  return _PostReducer(state, action);
}
