export default defineNuxtRouteMiddleware((to, from) => {
	let token = useCookie("token");

	if (token.value) return navigateTo("/");
})