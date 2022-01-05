export function parseFieldsFromObject({ object }) {
  const ans = [];
  Object.keys(object).forEach((key) => {
    if (Object.keys(object[key]).length) {
      const recAns = parseFieldsFromObject({ object: object[key] });
      ans.push(...recAns);
    } else {
      ans.push(key);
    }
  });
  return [... new Set(ans)];
}
