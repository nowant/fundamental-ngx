/**
 *
 * Get 'http://localhost:4203/'  from 'http://localhost:4203/remoteEntry.js'
 */
export const getBasePath = (uri: string): string => {
    return new URL('/', uri).href;
}
