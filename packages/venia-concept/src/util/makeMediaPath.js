const trailingSlashRE = /\/+$/;
const wrappingSlashRE = /^\/*(.+?)\/*$/;
export function makePathPrepender(prefix) {
    const normalizedPrefix = prefix.replace(trailingSlashRE, '') + '/';
    return (...args) => {
        return (
            normalizedPrefix +
            args
                .map(p =>
                    typeof p === 'string'
                        ? p.replace(wrappingSlashRE, '$1')
                        : ''
                )
                .join('/')
        );
    };
}

const mediaPath = 'pub/media/catalog/';

export const makeProductMediaPath = makePathPrepender(mediaPath + '/product/');

export const makeCategoryMediaPath = makePathPrepender(
    mediaPath + '/category/'
);
