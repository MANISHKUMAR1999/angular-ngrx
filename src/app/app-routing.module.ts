import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PostlistComponent } from './post/postlist/postlist.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'counter',
    loadChildren:()=>import('./state/counter.module').then((m)=>m.CounterModule)
  },
  {
    path:'posts',
   loadChildren:()=>import('./post/post.module').then((m)=>m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
