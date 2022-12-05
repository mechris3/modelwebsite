import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentComponent } from './component.component';

describe('ComponentComponent', () => {
    let component: ComponentComponent;
    let fixture: ComponentFixture<ComponentComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentComponent],
            imports: [CommonModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ComponentComponent);
        component = fixture.componentInstance;
    });

    it('can be created', () => {
        expect(component).toBeDefined();
    });
});

/**
 * This is a stub of the ComponentComponentStubComponent with the same inputs
 * for the purposes of testing the components that wrap it.
 */
@Component({
    selector: 'cm-component',
    template: '',
})
export class ComponentComponentStubComponent {
    @Input() title = '';
    @Output() anEvent = new EventEmitter<string>();
}
