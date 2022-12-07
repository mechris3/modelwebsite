// import { TestBed } from '@angular/core/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { Observable } from 'rxjs';
// import { Feature1DataService } from '../services/feature1.data.service';
// import { MockFeature1DataService } from '../services/feature1.data.service.spec';
// import { LoadFeature1Data, LoadFeature1DataSuccess } from './feature1.actions';
// import { Feature1Effects } from './feature1.effects';
// import { IState } from './feature1.model';

// describe('Feature1Effects', () => {
//     let feature1Effects: Feature1Effects;
//     let actions$: Observable<any>;
//     let feature1DataService: Feature1DataService;
//     const initialState: IState = {
//         name: null,
//         featureDetails: null,
//     };

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [],

//             providers: [
//                 {
//                     provide: Feature1DataService,
//                     useClass: MockFeature1DataService,
//                 },
//                 Feature1Effects,
//                 provideMockActions(() => actions$),
//             ],
//         });
//     });

//     feature1Effects = TestBed.inject(Feature1Effects);
//     feature1DataService = TestBed.inject(Feature1DataService);

//     xit('loadData', () => {
//         spyOn(feature1DataService, 'getData').and.callThrough();
//         const action = LoadFeature1Data();
//         const actionSuccess = LoadFeature1DataSuccess({
//             payload: initialState,
//         });
//         // actions$ = hot('-a', { a: action });
//         // const expected = cold('-(b)', { b: actionSuccess });
//         // expect(feature1Effects.loadData$).toBeTruthy()   // .toBeObservable(expected);
//     });
// });
