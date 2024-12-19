import Vue3Toastify, {toast, type ToastContainerOptions} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import 'assets/css/toastify.scss'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 1000 } as ToastContainerOptions);

	return {
		provide: { toast },
	};
});