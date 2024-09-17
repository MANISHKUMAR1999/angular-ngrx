import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.actions';
import { Counter } from 'src/app/state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  @Input() counter !: number;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }
increment(){
  this.store.dispatch(increment())

}
decrement(){
  this.store.dispatch(decrement())
}
reset(){
  this.store.dispatch(reset())
}
}
