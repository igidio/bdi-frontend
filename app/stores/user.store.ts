import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore('user', () => {
	//Similar a estados

	// TODO: User interface
	const user = ref(0)

	// TODO: Log all info to interface
	const log_user = ( id: number ) => { user.value = id }

	//regresamos los datos
	return { user, log_user }
})