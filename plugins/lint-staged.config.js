module.exports = {
    '*.{js,ts,tsx,jsx}': ['yarn run lint:fix', 'yarn run pretty', 'git add'],
    '*.{md,css,sass,yml,yaml,scss,json,html}': ['prettier --write', 'git add'],
};
