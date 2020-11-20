import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {
    ButtonComponent,
    ButtonModule,
    ComboboxComponent,
    ComboboxModule,
    OptionComponent,
    SelectComponent,
    SelectModule
} from '@fundamental-ngx/core';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        ButtonModule,
        SelectModule,
        ComboboxModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule implements DoBootstrap {

    constructor(injector: Injector) {
        const buttonComponent = createCustomElement(ButtonComponent, { injector: injector });
        customElements.define('fd-web-component-button', buttonComponent);
        const selectComponent = createCustomElement(SelectComponent, { injector: injector });
        customElements.define('fd-web-component-select', selectComponent);
        const optionComponent = createCustomElement(OptionComponent, { injector: injector });
        customElements.define('fd-web-component-option', optionComponent);
        const comboboxComponent = createCustomElement(ComboboxComponent, { injector: injector });
        customElements.define('fd-web-component-combobox', comboboxComponent);
    }

    ngDoBootstrap() { }
}
