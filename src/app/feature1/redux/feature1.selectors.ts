import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './feature1.model';

export const feature1Feature = createFeatureSelector<IState>('feature1');
export const feature1Name = createSelector(
    feature1Feature,
    (_feature1Feature) => _feature1Feature.name
);

export const feature1Version = createSelector(
    feature1Feature,
    (_feature1Feature) => _feature1Feature.featureDetails?.version
);
