import { Action } from "@ngrx/store";

export interface IFeatureDetails {
    version: string;
}
export interface IState {
    name: string | null;
    featureDetails: IFeatureDetails | null;
}

export type IAction = Action & {payload: any}
