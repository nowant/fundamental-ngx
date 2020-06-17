import { Directive, HostBinding } from '@angular/core';

/**
 * Applies the panel title style to a header element. It can be used with any header level.
 *
 * ```html
 * <h1 fd-layout-panel-title>Layout Panel Title</h1>
 * <h3 fd-layout-panel-title>Layout Panel Title</h3>
 * ```
 */
@Directive({
    // TODO to be discussed
    // tslint:disable-next-line:directive-selector
    selector: '[fd-layout-panel-title]'
})
export class LayoutPanelTitleDirective {
    /** @hidden */
    @HostBinding('class.fd-layout-panel__title')
    fdLayoutPanelTitleClass: boolean = true;
}
