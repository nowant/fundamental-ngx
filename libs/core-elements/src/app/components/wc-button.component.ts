import { Component, Input } from '@angular/core';
import { ButtonType, GlyphPosition } from '@fundamental-ngx/core';

@Component({
    template: `
        <button
            [type]="type"
            [glyphPosition]="glyphPosition"
            [glyph]="glyph"
            [compact]="compact"
            [fdType]="fdType"
            [label]="label"
            [fdMenu]="fdMenu"
            fd-button>
        </button>`
})
export class WcButtonComponent {
    @Input()
    type = 'button';

    @Input()
    glyphPosition: GlyphPosition = 'before';

    @Input()
    glyph = '';

    @Input()
    compact = false;

    @Input()
    fdType: ButtonType = 'standard';

    @Input()
    label: string;

    @Input()
    fdMenu = false;
}
