const path = require('path');

module.exports = {
	extends: [
		'plugin:prettier/recommended',
		'prettier',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'no-shadow': 0,
		'import/extensions': 0,
		'react/jsx-filename-extension': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'no-use-before-define': 0,
		'object-curly-newline': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-explicit-any': 0,
	},
	plugins: ['@typescript-eslint', 'prettier', 'import', 'jsx-a11y'],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@/containers/*', path.resolve(__dirname, './src/containers')],
					['@/components/*', path.resolve(__dirname, './src/components')],
					['@/styleguide/*', path.resolve(__dirname, './src/styleguide')],
					['@/pages/*', path.resolve(__dirname, './pages')],
				],
				extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
			},
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};
