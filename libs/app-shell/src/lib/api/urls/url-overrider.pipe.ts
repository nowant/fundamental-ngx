import { Pipe, PipeTransform } from '@angular/core';
import { isAbsoluteUrl, resolveUrl } from './url-utils';

/**
 * Pipe is responsible for overriding dynamically created urls
 *
 * Example:
   @Component({
       //...
       template: `
           <img [src]="avatarImgSrc | fdsUrlOverrider: baseUrl"/>
       `
   })
   class RemoteComponent implements OnInit {
       avatarImgSrc: string;
       avatarImgSize = '30x30';

       ngOnInit(): void {
           this.avatarImgSrc = `assets/avatar-${this.avatarImgSize}.jpg`;
       }
    }
 */
@Pipe({
    name: 'fdsUrlOverrider',
    pure: false
})
export class UrlOverriderPipe implements PipeTransform {
    public transform(url: string, baseUrl: string): string {
        if (typeof baseUrl !== 'string' || isAbsoluteUrl(url)) {
            return url;
        }

        return resolveUrl(baseUrl, url);
    }
}
