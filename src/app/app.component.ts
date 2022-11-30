import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialiseStore } from './redux/main.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modelwebsite';
  constructor(store: Store) {
    // store.dispatch(initialiseStore())
  }
}
