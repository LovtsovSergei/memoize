export function memoize(func) {
    if (typeof (func) !== 'function' || !arguments.length) return null;
    const cache = new Map();
    return function memoized(...args) {
        let key = '';
        if (!args.length) key = 'null';
        else {
            for (let i = 0; i < args.length; i += 1) {
                key += args[i] + typeof args[i];
            }
        }
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

