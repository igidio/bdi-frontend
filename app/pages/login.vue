<template>
	
	<AppCard>
		<div class="text-center flex flex-col">
			<span class="text-xl font-semibold">Bienvenido</span>
			<span class="text-sm">¿No tienes una cuenta?, puedes <NuxtLink class="hyper" to="signup">Registrarte</NuxtLink></span>
		</div>
		
		<form @submit.prevent>
			
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<label for="input-label" class="block font-medium dark:text-white">Nombre de usuario o correo electrónico</label>
					<input type="string" class="input gray" v-model="form.username_or_email">
				</div>
				
				<div class="flex flex-col gap-2">
					<label for="input-label" class="block font-medium dark:text-white">Contraseña</label>
					<input type="password" class="input gray" v-model="form.password">
					<NuxtLink class="hyper text-sm" to="forgot">¿Olvidaste la contraseña?.</NuxtLink>
				</div>
				
				<div class="inline-flex">
					<input
						type="checkbox"
						class="checkbox"
						id="hs-checked-checkbox"
						:checked="false"
						v-model="form.remember_me"
					>
					<label for="hs-checked-checkbox" class="text-gray-500 ms-3 dark:text-neutral-400">Recuérdame</label>
				</div>
				<span v-if="error_message" class="text-red-500 font-semibold">{{ error_message }}</span>
				<button class="button primary block" type="submit" @click="get_user()">Iniciar sesión</button>
			</div>
		</form>
	</AppCard>
</template>

<script setup lang="ts">
import {useUserStore} from "~/stores/user.store";

const form = ref({
	username_or_email: "",
	password: "",
	remember_me: false,
});
const error_message:Ref<undefined|string> = ref()

definePageMeta({
	layout: "auth",
});

const userStore = useUserStore()

const get_user = async () => {
	await $fetch('/api/auth/login', {
		method: 'POST',
		body: {
			username_or_email: form.value.username_or_email,
			password: form.value.password,
			remember_me: form.value.remember_me
		}
	} )
		.then((e) => {
			error_message.value = undefined
		})
		.catch((e) => {
		error_message.value = e.data.message
	})
}
</script>