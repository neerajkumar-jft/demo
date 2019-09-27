import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CounterState } from '../counters-state';
import { RESET, INCREMENT, DECREMENT } from '../store';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  a: Observable<number>;
  b: Observable<number>;
  subscribe: Subscription;

  constructor(private store: Store<{ counters: CounterState }>) {
    this.a = store.pipe(select(state => state.counters.a));
    this.b = store.pipe(select(state => state.counters.b));
  }
  reset() {
    this.store.dispatch(RESET);
  }
  start() {
    const source = interval(1000);
    this.subscribe = source.subscribe(val => {
      this.store.dispatch(INCREMENT);
      this.store.dispatch(DECREMENT);
      this.store.dispatch(DECREMENT);
     });
  }

  stop() {
    this.subscribe.unsubscribe();
  }

  ngOnInit() {
  }

}
