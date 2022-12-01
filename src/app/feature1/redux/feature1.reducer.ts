import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { LoadFeature1DataSuccess } from './feature1.actions';
import { IAction, IState } from './feature1.model';

const initialState: IState = {
    name: null,
    featureDetails: null,
};

const _reducer = createReducer(
    initialState,
    on(
        LoadFeature1DataSuccess,
        (state: IState, action: IAction) => action.payload
    )
);

export function reducer(state: IState | undefined, action: Action) {
    return _reducer(state, action);
}
