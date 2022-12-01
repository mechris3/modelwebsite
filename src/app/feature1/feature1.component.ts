import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadFeature1Data } from './redux/feature1.actions';

@Component({
    selector: 'feature1',
    templateUrl: './feature1.component.html',
    styleUrls: ['./feature1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Feature1Component {
    title = 'Feature 1';
    constructor(store: Store) {
        store.dispatch(LoadFeature1Data())
    }
}
