import { Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { RtlService } from '../utils/services/rtl.service';
import { KeyUtil } from '../utils/functions';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';

/**
 * Service that is responsible for providing keyboard actions support
 * */
@Injectable()
export class TabsService {
    /** Event is thrown always when tab is selected by keyboard actions */
    readonly tabSelected: Subject<number> = new Subject<number>();

    /** Event is thrown always, when some property is changed */
    readonly tabPanelPropertyChanged: Subject<void> = new Subject<void>();

    constructor(@Optional() private _rtlService: RtlService) {}

    /** @hidden */
    tabHeaderKeyHandler(index: number, event: any, elements: HTMLElement[]): void {
        const rtlDirection: boolean = this._rtlService && this._rtlService.rtl.getValue();

        if (KeyUtil.isKeyCode(event, LEFT_ARROW)) {
            if (!rtlDirection) {
                this._focusPrevious(index, elements);
            } else {
                this._focusNext(index, elements);
            }
        } else if (KeyUtil.isKeyCode(event, RIGHT_ARROW)) {
            if (!rtlDirection) {
                this._focusNext(index, elements);
            } else {
                this._focusPrevious(index, elements);
            }
        } else if (KeyUtil.isKeyCode(event, [SPACE, ENTER])) {
            event.preventDefault();
            this.tabSelected.next(index);
        }
    }

    /** @hidden */
    private _focusNext(index: number, elements: HTMLElement[]): void {
        if (index + 1 < elements.length) {
            this._getTabLinkFromIndex(index + 1, elements).focus();
        } else {
            this._getTabLinkFromIndex(0, elements).focus();
        }
    }

    /** @hidden */
    private _focusPrevious(index: number, elements: HTMLElement[]): void {
        if (index - 1 >= 0) {
            this._getTabLinkFromIndex(index - 1, elements).focus();
        } else {
            this._getTabLinkFromIndex(elements.length - 1, elements).focus();
        }
    }

    /** @hidden */
    private _getTabLinkFromIndex(index: number, elements: HTMLElement[]): HTMLElement {
        return elements[index];
    }
}
