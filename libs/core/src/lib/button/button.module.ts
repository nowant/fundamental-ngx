import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { IconModule } from '../icon/icon.module';
import { createCustomElement } from '@angular/elements';

@NgModule({
    imports: [CommonModule, IconModule],
    exports: [ButtonComponent],
    declarations: [ButtonComponent],
    bootstrap: [ButtonComponent]
})
export class ButtonModule {
    constructor(private  _injector: Injector) {}

    ngDoBootstrap() {
        const customButton = createCustomElement(ButtonComponent, { injector: this._injector });
        customElements.define('custom-fd-button', customButton);
    }
}
