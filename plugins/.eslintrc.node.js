module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'import', 'jest', 'sort-keys-fix', 'sort-class-members', 'unused-imports'],
    extends: ['airbnb-typescript/base', 'prettier', 'prettier/@typescript-eslint', 'plugin:jest/recommended'],
    env: {
        browser: false,
        node: true,
        es6: true,
        jest: true,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
        'no-empty-function': 'warn',
        'no-useless-constructor': 'off',
        'class-methods-use-this': 'warn',
        'sort-keys-fix/sort-keys-fix': 'error',
        '@typescript-eslint/camelcase': 'off',
        'import/no-extraneous-dependencies': 'off',
        'sort-class-members/sort-class-members': [
            'error',
            {
                order: [
                    '[static-properties]',
                    '[static-methods]',
                    '[properties]',
                    '[conventional-private-properties]',
                    'constructor',
                    '[conventional-private-methods]',
                    '[methods]',
                ],
                accessorPairPositioning: 'getThenSet',
                sort: 'alphabetical',
            },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports-ts': 2,
        'unused-imports/no-unused-vars-ts': 2,
    },
};
