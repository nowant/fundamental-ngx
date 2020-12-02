import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonModule, ComboboxModule, DynamicComponentService, SelectModule } from '@fundamental-ngx/core';
import { components, WcButtonComponent, WcComboboxComponent, WcSelectComponent } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [components],
    imports: [
        BrowserModule,
        ButtonModule,
        SelectModule,
        ComboboxModule,
        FormsModule
    ],
    providers: [DynamicComponentService]
})
export class AppModule implements DoBootstrap {

    constructor(private _injector: Injector) { }

    ngDoBootstrap(): void {
        this.defineCustomElement('wc-select', WcSelectComponent);
        this.defineCustomElement('wc-button', WcButtonComponent);
        this.defineCustomElement('wc-combobox', WcComboboxComponent);
    }

    defineCustomElement(name: string, component: Type<any>): void {
        customElements.define(name, createCustomElement(component, { injector: this._injector }));
    }
}
