// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: {enabled: true},

	devServer: {
		port: 5173
	},

	modules: ['@nuxtjs/tailwindcss'],
	plugins: ["~/plugins/preline.client.ts"],
	// components: [
	// 	{
	// 		prefix: 'App',
	// 		path: '~/components/App',
	// 		pathPrefix: true,
	// 	},
	// ],

	future: {
		compatibilityVersion: 4
	}
})