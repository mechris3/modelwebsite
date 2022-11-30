import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/feature1.reducer';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [Feature1Component],

    imports: [
        CommonModule,
        Feature1RoutingModule,
        StoreModule.forFeature('feature1', reducer),
    ],
    providers: [],
})
export class Feature1Module {}
