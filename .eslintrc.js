module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es2021": true,
		"node": true
	},
	parser: "@babel/eslint-parser",
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"prettier"
	],
	"parserOptions": {
		requireConfigFile: false,
		babelOptions: {
			presets: [
				"@babel/preset-env",
				[
					"@babel/preset-react"
				]
			]
		}
	},
	"plugins": [
		"react",
		"prettier"
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
		"no-dupe-keys": 0,
		"react/prop-types": 0
	},
};







