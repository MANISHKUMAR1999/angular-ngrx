import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Counter } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit,OnDestroy {
counter!:number
counterSubscription!:Subscription
counter$!:Observable<Counter>;
  constructor(private store:Store<{counter:Counter}>) { }

  ngOnInit(): void {
    this.counterSubscription =   this.store.select('counter').subscribe((data)=>this.counter = data.counter)

    this.counter$  = this.store.select('counter')
  }
  ngOnDestroy():void{
    if(this.counterSubscription)
this.counterSubscription.unsubscribe()
  }

}
