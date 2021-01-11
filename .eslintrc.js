module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'plugin:vue/essential',
		'prettier',
		'prettier/vue',
	],
	plugins: ['prettier', 'vue'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
		allowImportExportEverywhere: true,
		parser: 'babel-eslint',
		ecmaFeatures: {
			spread: true
		}
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'object-shorthand': ['warn'],
		'vue/component-tags-order': ['off']
	}
};
