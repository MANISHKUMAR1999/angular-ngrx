import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../postlist/state/post.selectors';
import { Post } from 'src/app/models/posts.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { addPost, updatePost } from '../postlist/state/post.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: Post | undefined;
  postForm!: FormGroup;
  postSubscription!: Subscription;
  constructor(
    private _router: ActivatedRoute,
    private store: Store<AppState>,
    private _fb: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this._router.paramMap.subscribe((params) => {
      const id: any = params.get('id');

      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          console.log(this.post);
          this.createForm();
        });
    });
  }

  createForm() {
    this.postForm = this._fb.group({
      title: [this.post?.title, [Validators.required]],
      description: [this.post?.description, [Validators.required]],
    });
  }
  showDescriptionErrors(){
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm.valid){
      if(descriptionForm.hasError('required')){
        return 'Description is requires'
      }

      if(descriptionForm.hasError('minlength')){
        return 'Description filled must be 7 character long'
      }
      return null

    

    }
    return null
  }
  onUpdatePost() {
    if(this.postForm.get('description')?.value == '' && this.postForm.get('title')?.value == ''){
      this.postForm.get('title')?.markAsTouched();
      this.postForm.get('description')?.markAsDirty();
      this.postForm.get('description')?.markAsTouched();
      this.postForm.get('title')?.markAsDirty();
      this.postForm.updateValueAndValidity();
     
    }
    else if(this.postForm.valid){
      console.log(this.postForm.value)
      const title = this.postForm.get('title')?.value
      const description = this.postForm.get('description')?.value

      const post:Post = {
        id:this.post?.id,
        title,
       description
      }

      this.store.dispatch(updatePost({post}))
      this.router.navigate(['posts'])
    }
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
