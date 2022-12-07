import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { Feature1DataService } from '../services/feature1.data.service';
import { LoadFeature1Data, LoadFeature1DataSuccess } from './feature1.actions';

@Injectable()
export class Feature1Effects {
    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadFeature1Data),
            switchMap(() => this.feature1DataService.getData()),
            map((payload) => LoadFeature1DataSuccess({ payload }))
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly feature1DataService: Feature1DataService
    ) {}
}
