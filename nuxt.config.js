import colors from 'vuetify/es5/util/colors'

export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		titleTemplate: '%s - Rob Stuurman',
		title: 'Rob Stuurman - Energetisch Genezer',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'msapplication-TileColor', content: '#00aba9' },
			{ name: 'theme-color', content: '#ffffff' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
		],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
		'@nuxtjs/svg',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: ['portal-vue/nuxt'],

	// Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
	vuetify: {
		customVariables: ['~/assets/variables.sass'],
		treeShake: true,
		theme: {
			options: { customProperties: true },
			themes: {
				light: {
					primary: '#1E1E1E', // black
					accent: '#F07C6D', // orange
					secondary: '#7784C8', // purple
					tertiary: '#47537F', // blue
					skin: '#FFECE5', // zalmroze
					lightpurple: '#F1EBF5',
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
			},
		},
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		extend(config, { isDev, _isClient }) {
			// ..
			config.module.rules.push({ test: /\.pug$/, loader: 'pug-plain-loader' })
			// Sets webpack's mode to development if `isDev` is true.
			if (isDev) {
				config.mode = 'development'
			}
		},
	},
}
