import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { initialiseStore } from './main.actions';

export interface IState {
    name: string;
    features: Array<string>;
}

const initialState: IState = {
    name: 'Model Wesbite',
    features: ['Feature 1', 'Feature 2'],
};

const _reducer = createReducer(
    initialState,
    on(initialiseStore, (state: IState, action: Action) => initialState)
);

export function reducer(state: IState | undefined, action: Action) {
    return _reducer(state, action);
}
