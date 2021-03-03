import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginLauncherComponent } from './plugin-launcher.component';
import { PluginPageLauncherComponent } from './plugin-page-launcher.component';
import { PathResolverPipe } from '../../api/plugins/path-resolver.pipe';

@NgModule({
    imports: [
        CommonModule

    ],
    declarations: [
        PluginLauncherComponent,
        PluginPageLauncherComponent,
        PathResolverPipe,
    ],
    exports: [
        PluginLauncherComponent,
        PluginPageLauncherComponent,
        PathResolverPipe,
    ]
})
export class PluginLauncherModule {
}
