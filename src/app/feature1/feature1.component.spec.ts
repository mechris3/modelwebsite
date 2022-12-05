import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { ComponentComponentStubComponent } from './components/component/component.component.spec';
import { Feature1Component } from './feature1.component';
import { IState } from './redux/feature1.model';

describe('Feature1Component', () => {
    let component: Feature1Component;
    let fixture: ComponentFixture<Feature1Component>;
    const initialState: IState = {
        name: null,
        featureDetails: null,
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Feature1Component, ComponentComponentStubComponent],
            imports: [CommonModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(Feature1Component);
        component = fixture.componentInstance;
    });

    it('can be created', () => {
        expect(component).toBeDefined();
    });
});
