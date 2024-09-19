import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../postlist/state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
postForm!:FormGroup
  constructor(private _fb:FormBuilder,private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.postForm = new FormGroup({
    //   title : new FormControl(null,[Validators.required,Validators.minLength(6)]),
    //   description : new FormControl(null,[Validators.required,Validators.minLength(10)])
    // })

    this.postForm = this._fb.group({
      title:['',[Validators.required,Validators.minLength(6)]],
      description:['',[Validators.required,Validators.minLength(7)]]
    })
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

  onAddPost(){

    if(this.postForm.get('description')?.value == '' && this.postForm.get('title')?.value == ''){
      this.postForm.get('title')?.markAsTouched();
      this.postForm.get('description')?.markAsDirty();
      this.postForm.get('description')?.markAsTouched();
      this.postForm.get('title')?.markAsDirty();
      this.postForm.updateValueAndValidity();
     
    }
    else if(this.postForm.valid){
      console.log(this.postForm.value)

      const post:Post = {
        title:this.postForm.get('title')?.value,
        description:this.postForm.get('description')?.value
      }

      this.store.dispatch(addPost({post}))
    }
   
   
  }

  

}
