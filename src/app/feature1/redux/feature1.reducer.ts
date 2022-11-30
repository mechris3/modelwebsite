import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { initialiseFeature1 } from './feature1.actions';
import { IState } from './feature1.model';



const initialState: IState = {
    name: 'Feature 1',
    featureDetails: {
        version: '1.0.0',
    },
};

const _reducer = createReducer(
    initialState,
    on(initialiseFeature1, (state: IState, action: Action) => initialState)
);

export function reducer(state: IState | undefined, action: Action) {
    console.log('in the Feature 1 reducer;');
    return _reducer(state, action);
}
