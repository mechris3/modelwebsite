import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/feature1.reducer';
import { EffectsModule } from '@ngrx/effects';
import { Feature1Effects } from './redux/feature1.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Feature1DataService } from './services/feature1.data.service';

@NgModule({
    declarations: [Feature1Component],
    imports: [
        CommonModule,
        HttpClientModule,
        Feature1RoutingModule,
        StoreModule.forFeature('feature1', reducer),
        EffectsModule.forFeature([Feature1Effects]),
    ],
    providers: [Feature1DataService],
})
export class Feature1Module {}
