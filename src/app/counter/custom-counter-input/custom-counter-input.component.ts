import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addDynamically, changeChannelName } from 'src/app/state/counter.actions';
import { getChannelName } from 'src/app/state/counter.selectors';
import { Counter } from 'src/app/state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
value!:number
channelName:string=''
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe(data=>{
      this.channelName = data
    })
  }
  onAdd(){
  //  console.log(this.value)
    this.store.dispatch(addDynamically({value:+this.value}))
  }

  chnageText(){
    this.store.dispatch(changeChannelName())
  }
}
