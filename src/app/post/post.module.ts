import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../counter/counter/counter.component';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostlistComponent } from './postlist/postlist.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
 
  {
    path:'',
    component:PostlistComponent,
    children:[
      {
        path:'add',component:AddPostComponent
      },
      {
        path:'edit/:id',component:EditPostComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    PostlistComponent,
    AddPostComponent,
    EditPostComponent

    
  
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule,FormsModule],
})
export class PostModule {}
