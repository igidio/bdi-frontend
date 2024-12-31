// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: {enabled: true},

	devServer: {
		port: +process.env.PORT!
	},

	modules: [
		'@nuxt/ui',
		'@nuxt/icon',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
	],
	colorMode: {
		classSuffix: '',
		preference: 'light',
		fallback: 'light'
	},
	plugins: [],
	components: [
		{
			prefix: 'App',
			path: '~/components/App',
			pathPrefix: true,
		},
		{
			prefix: 'Detail',
			path: '~/components/Detail',
			pathPrefix: true,
		},
		{
			prefix: 'Notifications',
			path: '~/components/Notifications',
			pathPrefix: true,
		},
		{
			prefix: 'User',
			path: '~/components/User',
			pathPrefix: true,
		},
		{
			prefix: 'Reservation',
			path: '~/components/Reservation',
			pathPrefix: true,
		},
	],

	future: {
		compatibilityVersion: 4
	},
	routeRules: {
		'/api/**': {
			proxy: {to: `${process.env.SERVER}/**`,},
		}
	},
	icon: {
		localApiEndpoint: '/iconify',
		provider: 'server',
		serverBundle: {
			collections: ['tabler']
		}
	},
	css: [
		"~/assets/css/tailwind.scss",
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler'
				}
			}
		}
	},
})