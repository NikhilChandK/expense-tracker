const filter = <T extends object>(
    el: T,
    predicate: (value: T[keyof T]) => boolean
): Partial<T> => {
    const result: Partial<T> = {};
    Object.entries(el).forEach(([key, value]) => {
        if (predicate(value)) {
            result[key as keyof T] = value;
        }
    });
    return result;
};
export { filter };
