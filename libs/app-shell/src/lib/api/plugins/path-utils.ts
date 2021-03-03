/**
 *
 * Get 'http://localhost:4203/'  from 'http://localhost:4203/remoteEntry.js'
 */
export const getBasePath = (uri: string): string => {
    return new URL('/', uri).href;
}

/**
 * Simplified version
 * This could be used: https://github.com/sindresorhus/is-absolute-url
 */
export const isAbsolutePath = (uri: string): boolean => {
    // checks http(s):// only
    return /^https?:\/\//i.test(uri);
}

/**
 * Here we'are trying to override all static assets in the component template
 */

/**
 * Traverse function through the compoled components
 */
export function traverseNgTemplateChildren(component: any, fn: Function): void {
    const componentTemplateAssets: [number | string, string][] = component.consts;

    if (Array.isArray(componentTemplateAssets)) {
        component.consts.forEach((asset, i) => {
            fn.apply(null, [asset, componentTemplateAssets[i]]);
        });
    }

    // always null :(, so we're not able to override child component asset paths
    const componentRenderedTemplate = component.tView;
    const components = componentRenderedTemplate ? componentRenderedTemplate.directiveRegistry : null;

    if (Array.isArray(components)) {
        components.forEach((component) => {
            traverseNgTemplateChildren(component, fn);
        });
    }
}

/**
 *
 * Angular Ivy Component (compiled)
 * @param component
 */
export const overrideNgComponentRelativePaths = (remotePath: string, component: any): void => {
    // 'http://localhost:4203/'
    const basePath = getBasePath(remotePath);
    // 'ɵcmp' specific property of a compiled component
    const renderedComponent = component['ɵcmp'];

    traverseNgTemplateChildren(renderedComponent, (asset: [number | string, string], componentTemplateAssetProperty) => {
        const absolutePath = overrideRelativePath(basePath, asset);

        if (absolutePath) {
            componentTemplateAssetProperty[1] = absolutePath;
        }
    });
}

/**
 * Override every Angular asset by its type
 */
export const overrideRelativePath = (basePath: string, asset: [number | string, string]): string => {
    // asset types
    const assetTypes = ['src', 'href', 'routerLink'];
    const [assetType, assetPath] = asset;

    if (assetTypes.indexOf(assetType as string) >= 0) {
        if (!isAbsolutePath(assetPath)) {
            return new URL(assetPath, basePath).href;
        }
    }

    return null;
}
