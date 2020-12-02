import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComboboxItem, PopoverFillMode } from '@fundamental-ngx/core';

@Component({
    template: `
        <fd-combobox
            [displayFn]="displayFn"
            [filterFn]="filterFn"
            [readOnly]="readOnly"
            [communicateByObject]="communicateByObject"
            [fillControlMode]="fillControlMode"
            [buttonFocusable]="buttonFocusable"
            [autoComplete]="autoComplete"
            [fillOnSelect]="fillOnSelect"
            [closeOnSelect]="closeOnSelect"
            [highlighting]="highlighting"
            [compact]="compact"
            [searchFn]="searchFn"
            [maxHeight]="maxHeight"
            [state]="state"
            [openOnKeyboardEvent]="openOnKeyboardEvent"
            [closeOnOutsideClick]="closeOnOutsideClick"
            [triggers]="triggers"
            [glyph]="glyph"
            [placeholder]="placeholder"
            [disabled]="disabled"
            [dropdownValues]="dropdownValues"
            [showDropdownButton]="showDropdownButton"
            (inputTextChange)="inputTextChange.emit($event)"
            (openChange)="openChange.emit($event)"
            (itemClicked)="itemClicked.emit($event)"
            [ngModel]="value"
            (ngModelChange)="selectedValue.emit($event)">
        </fd-combobox>
    `
})
export class WcComboboxComponent {

    @Input()
    value: any;

    @Input()
    dropdownValues: any[] = [];

    @Input()
    disabled: boolean;

    @Input()
    placeholder: string;

    @Input()
    glyph = 'navigation-down-arrow';

    @Input()
    triggers: string[] = [];

    @Input()
    closeOnOutsideClick = true;

    @Input()
    openOnKeyboardEvent = true;

    @Input()
    state: 'success' | 'error' | 'warning' | 'information';

    @Input()
    maxHeight = '50vh';

    @Input()
    searchFn: Function;

    @Input()
    compact = false;

    @Input()
    highlighting = true;

    @Input()
    closeOnSelect = true;

    @Input()
    fillOnSelect = true;

    @Input()
    autoComplete = true;

    @Input()
    fillControlMode: PopoverFillMode = 'at-least';

    @Input()
    communicateByObject = false;

    @Input()
    buttonFocusable = false;

    @Input()
    readOnly = false;

    @Input()
    showDropdownButton = true;

    @Output()
    itemClicked: EventEmitter<ComboboxItem> = new EventEmitter<ComboboxItem>();

    @Output()
    openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    inputTextChange: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    selectedValue: EventEmitter<any> = new EventEmitter<any>();

    @Input()
    displayFn: Function = x => x;

    @Input()
    filterFn: Function = x => x;
}
