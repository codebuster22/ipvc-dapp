const path = require('path');

module.exports = {
	extends: [
		'airbnb',
		'plugin:prettier/recommended',
		'prettier/react',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'prettier/@typescript-eslint',
		'plugin:import/typescript',
	],
	plugins: ['@typescript-eslint', 'prettier', 'react', 'import', 'jsx-a11y'],
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
