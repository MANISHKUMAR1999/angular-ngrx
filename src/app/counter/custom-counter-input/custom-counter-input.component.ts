import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addDynamically } from 'src/app/state/counter.actions';
import { Counter } from 'src/app/state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
value!:number
  constructor(private store:Store<{counter:Counter}>) { }

  ngOnInit(): void {
  }
  onAdd(){
    console.log(this.value)
    this.store.dispatch(addDynamically({value:+this.value}))
  }
}
