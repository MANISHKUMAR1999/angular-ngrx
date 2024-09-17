import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
postForm!:FormGroup
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    // this.postForm = new FormGroup({
    //   title : new FormControl(null,[Validators.required,Validators.minLength(6)]),
    //   description : new FormControl(null,[Validators.required,Validators.minLength(10)])
    // })

    this.postForm = this._fb.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
  }

  onAddPost(){
    console.log(this.postForm,"hello")
  }

}
