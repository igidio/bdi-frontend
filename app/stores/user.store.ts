import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type {UserInterface} from "~/interfaces";

export const useUserStore = defineStore('user', () => {
	const router = useRouter()
	//Similar a estados
	const token: Ref<string> = ref("");

	const user:Ref<UserInterface|undefined> = ref(undefined)

	const set_token = (
		new_token: string,
		set_to_storage: boolean = true,
		max_age: number = 60 * 60 * 4
	) => {
		if (set_to_storage) {
			const newCookie = useCookie("token", {
				maxAge: max_age,
				sameSite: true,
				secure: true,
			});
			newCookie.value = new_token;
		}
		token.value = new_token;
	};

	const get_token = () => {
		let token_from_storage = useCookie("token");
		if (token_from_storage.value) token.value = token_from_storage.value;
	};

	const delete_token = () => {
		const cookie = useCookie("token");
		cookie.value = undefined;
	};

	const log_user = async ( response: UserInterface ) => {
		user.value = response
		set_token(user.value.token)
		await router.push({
			path: "/",
		});
	}

	const set_user = (response: UserInterface) => {
		user.value = response;
	}

	const logout_user = async () => {
		delete_token();
		user.value = undefined  //as UserInterface;

		await router.push({
			path: "/login",
		});
		//useRouter().go(0);
		//useToast().add({ title: "Sesión finalizada" });
	};

	const user_role = computed(() => user.value?.role)

	//regresamos los datos
	return { user, log_user, logout_user, set_user, get_token, token, user_role }
})