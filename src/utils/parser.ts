export function parseFieldsFromObject({ object }) {
    const ans = [];
    Object.keys(object).forEach(key => {
        ans.push(key);
        if (Object.keys(object[key]).length) {
            const recAns = parseFieldsFromObject({ object: object[key] });
            ans.push(...recAns);
        }
    });
    return [...new Set(ans)];
}
