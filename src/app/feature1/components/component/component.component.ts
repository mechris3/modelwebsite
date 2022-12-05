import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'cm-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentComponent {
    @Output()
    anEvent = new EventEmitter<string>();

    @Input()
    title = '';

    emitEvent(): void {
        this.anEvent.emit('Event')
    }
}
