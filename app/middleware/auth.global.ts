export default defineNuxtRouteMiddleware((to, from) => {

	const paths = ['/login', '/signup', '/forgot']
	let token = useCookie("token");

	console.log(to.path)

	if (!token.value && (!paths.includes(to.path) ))
		return navigateTo("/login");
})