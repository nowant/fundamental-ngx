import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopperOptions } from 'popper.js';
import { MobileModeConfig, PopoverFillMode, SelectControlState } from '@fundamental-ngx/core';

@Component({
    template: `
        <fd-select placeholder="Select an option"
                   [state]="state"
                   [controlId]="controlId"
                   [mobile]="mobile"
                   [stateMessage]="stateMessage"
                   [disabled]="disabled"
                   [readonly]="readonly"
                   [placeholder]="placeholder"
                   [compact]="compact"
                   [maxHeight]="maxHeight"
                   [glyph]="glyph"
                   [closeOnOutsideClick]="closeOnOutsideClick"
                   [popperOptions]="popperOptions"
                   [fillControlMode]="fillControlMode"
                   [unselectMissingOption]="unselectMissingOption"
                   [typeaheadDebounceInterval]="typeaheadDebounceInterval"
                   [ariaLabelledBy]="ariaLabelledBy"
                   [ariaLabel]="ariaLabel"
                   [mobileConfig]="mobileConfig"
                   [value]="value"
                   (valueChange)="selectedValue.emit($event)"
                   (isOpenChange)="isOpenChange.emit($event)">
            <fd-option *ngFor="let option of options" [value]="option">{{ option }}</fd-option>
        </fd-select>
    `
})
export class WcSelectComponent {
    @Input()
    controlId: string;

    @Input()
    state: SelectControlState = null;

    @Input()
    mobile = false;

    @Input()
    stateMessage: string;

    @Input()
    disabled = false;

    @Input()
    readonly = false;

    @Input()
    placeholder: string;

    @Input()
    value: any;

    @Input()
    compact = false;

    @Input()
    maxHeight: string;

    @Input()
    glyph = 'slim-arrow-down';

    @Input()
    closeOnOutsideClick = true;

    @Input()
    popperOptions: PopperOptions = {
        placement: 'bottom-start',
        modifiers: {
            preventOverflow: {
                enabled: true,
                escapeWithReference: true,
                boundariesElement: 'scrollParent'
            }
        }
    };

    @Input()
    fillControlMode: PopoverFillMode = 'at-least';

    @Input()
    unselectMissingOption = true;

    @Input()
    typeaheadDebounceInterval = 250;

    @Input()
    ariaLabelledBy: string = null;

    @Input()
    ariaLabel: string = null;

    @Input()
    mobileConfig: MobileModeConfig = { hasCloseButton: true };

    @Input()
    options: any[] = ['Option 1', 'Option 2'];

    @Output()
    selectedValue = new EventEmitter();

    @Output()
    isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    valueChange: EventEmitter<any> = new EventEmitter<any>();
}
