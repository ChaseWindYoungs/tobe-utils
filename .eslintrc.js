module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parser: 'vue-eslint-parser',
    "parserOptions": {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: false,
            jsx: true,
            tsx: true,
        }
    },
    "plugins": [
        "vue"
    ],
    
    "rules": {
        // 'import/no-extraneous-dependencies': ["ERROR", { devDependencies: true }],
        // 'import/prefer-default-export': "OFF",
        // 'unicorn/better-regex': "ERROR",
        // 'unicorn/prevent-abbreviations': "OFF",
    }
}
