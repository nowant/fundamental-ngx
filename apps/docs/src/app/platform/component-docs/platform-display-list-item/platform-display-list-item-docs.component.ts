import { Component } from '@angular/core';

import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

import * as dliSrc from '!raw-loader!./platform-display-list-item-examples/platform-display-list-item-example.component.html';
import * as borderLessDLISrc from '!raw-loader!./platform-display-list-item-examples/platform-borderless-display-list-item-example.component.html';
import * as borderLessDLITs from '!raw-loader!./platform-display-list-item-examples/platform-display-list-item-border-less-example.component.ts';
import * as dliWithNavigation from '!raw-loader!./platform-display-list-item-examples/platform-display-list-item-with-navigation-example.component.html';


@Component({
    selector: 'app-standard-list-item',
    templateUrl: './platform-display-list-item-docs.component.html'
})
export class PlatformDisplayListItemDocsComponent {
    simpleDLI: ExampleFile[] = [
        {
            language: 'html',
            code: dliSrc,
            fileName: 'platform-display-list-item-example',
        }
    ];

    borderLessDLI: ExampleFile[] = [
        {
            language: 'html',
            code: borderLessDLISrc,
            fileName: 'platform-borderless-display-list-item-example',
        },
        {
            language: 'typescript',
            component: 'PlatformDisplayListBorderLessExampleComponent',
            code: borderLessDLITs,
            fileName: 'platform-borderless-display-list-item-example'
        }
    ];

    dliWithNavigation: ExampleFile[] = [
        {
            language: 'html',
            code: dliWithNavigation,
            fileName: 'platform-display-list-item-with-navigation-example',
        }
    ];

}
