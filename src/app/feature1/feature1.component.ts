import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'feature1',
    templateUrl: './feature1.component.html',
    styleUrls: ['./feature1.component.scss'],
})
export class Feature1Component {
    title = 'Feature 1';
    constructor(store: Store) {}
}
