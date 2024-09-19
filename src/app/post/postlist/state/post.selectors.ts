import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './post.state';
import { Post } from 'src/app/models/posts.model';

const getPostState = createFeatureSelector<PostsState>('posts');

export const getPost = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getPostState,
  (state: { posts: Post[] }, props: { id: any }) => {
    return state.posts.find((post) => post.id == props.id);
  }
);
