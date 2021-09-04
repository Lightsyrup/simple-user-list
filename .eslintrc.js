module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        requireConfigFile: false,
        babelOptions: {
            presets: [
                "@babel/preset-env",
                [
                    "@babel/preset-react"
                ],

            ]
        },
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12
    },
    "plugins": [
        "react",
        "prettier",
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/prop-types": 0,
        "@typescript-eslint/no-var-requires": 0
    }
};
