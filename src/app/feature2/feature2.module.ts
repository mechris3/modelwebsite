import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

import { Feature2Component } from './feature2.component';
import { Feature2RoutingModule } from './feature2-routing.module';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [Feature2Component],

    imports: [CommonModule, Feature2RoutingModule],
    providers: [],
})
export class Feature2Module {}
