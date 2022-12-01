import { createAction, props } from '@ngrx/store';
import { IState } from './feature1.model';

export const LoadFeature1Data = createAction('[Feature 1] Load Data');
export const LoadFeature1DataSuccess = createAction(
    '[Feature 1] Load Data Success',
    props<{ payload: IState }>()
);
