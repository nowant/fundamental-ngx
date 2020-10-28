import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent, ButtonModule } from '@fundamental-ngx/core';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule implements DoBootstrap {

    constructor(injector: Injector) {
        const buttonComponent = createCustomElement(ButtonComponent, { injector: injector });
        customElements.define('fd-web-component-button', buttonComponent);
    }

    ngDoBootstrap() { }
}
