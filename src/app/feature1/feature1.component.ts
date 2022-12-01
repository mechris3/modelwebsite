import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadFeature1Data } from './redux/feature1.actions';
import { feature1Name, feature1Version } from './redux/feature1.selectors';

@Component({
    selector: 'feature1',
    templateUrl: './feature1.component.html',
    styleUrls: ['./feature1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature1Component {
    name$ = this.store.select(feature1Name);
    version$ = this.store.select(feature1Version);
    constructor(private readonly store: Store) {
        store.dispatch(LoadFeature1Data());
    }
}
