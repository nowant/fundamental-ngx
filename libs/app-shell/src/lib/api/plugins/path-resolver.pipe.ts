import { Pipe, PipeTransform } from '@angular/core';
import { isAbsolutePath, getBasePath } from './path-utils';

@Pipe({
    name: 'fdsPathResolver',
    pure: false
})
export class PathResolverPipe implements PipeTransform {
    transform(path: string, basePath: string): string {
        if (isAbsolutePath(path)) {
            return path;
        }

        const rootPath = getBasePath(basePath);
        return `${rootPath}${path}`;
    }
}
