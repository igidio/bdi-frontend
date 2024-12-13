export default defineNuxtPlugin((nuxtApp) => {

	const auth_fetch = $fetch.create({
		onRequest({request, options, error}) {
			options.headers.set('Authorization', `Bearer ${useCookie("token").value}`)

		}
	})

	return {
		provide: {
			auth_fetch
		}
	}
})