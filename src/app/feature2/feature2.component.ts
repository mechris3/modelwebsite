import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'feature12',
    templateUrl: './feature2.component.html',
    styleUrls: ['./feature2.component.scss'],
})
export class Feature2Component {
    title = 'Feature 2';
    constructor(store: Store) {}
}
