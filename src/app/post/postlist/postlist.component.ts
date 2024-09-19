import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsState } from './state/post.state';
import { AppState } from 'src/app/store/app.state';
import { Post } from 'src/app/models/posts.model';
import { Observable } from 'rxjs';
import { getPost } from './state/post.selectors';
import { deletePost } from './state/post.actions';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
posts!:Observable<Post[]>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPost)
  }
  onDeletePost(id:number | undefined){
    if(confirm("Are you sure you want to delete")){
      console.log("you want to delete")

      this.store.dispatch(deletePost({id}))
    }

  }
}
