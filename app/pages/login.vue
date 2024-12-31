<template>

	<UCard>
		<div class="text-center flex flex-col">
			<span class="text-xl font-semibold">Bienvenido</span>
			<span class="text-sm">¿No tienes una cuenta?, puedes <NuxtLink class="hyper"
			                                                               to="signup">Registrarte</NuxtLink></span>
		</div>

		<form @submit.prevent="submit">

			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<label for="input-label" class="block font-medium dark:text-white">Nombre de usuario o correo
						electrónico</label>
					<input type="text" class="input gray" v-model="form.username_or_email" autocomplete="username">
				</div>


				<div class="flex flex-col gap-2">
					<label for="input-label" class="block font-medium dark:text-white">Contraseña</label>
					<input type="password" class="input gray" v-model="form.password" autocomplete="current-password">
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
				<UAlert
					v-if="error_message"
					icon="tabler:alert-hexagon"
					color="red"
					variant="subtle"
					title=""
					:description="error_message"
				/>
				<UButton block type="submit" :loading="loading">Iniciar sesión</UButton>
			</div>
		</form>
	</UCard>
</template>

<script setup lang="ts">
import type {UserInterface} from "~/interfaces";

definePageMeta({
	layout: "auth",
	middleware: "unauthenticated"
});
import {z} from "zod";
import {useUserStore} from "~/stores/user.store";

const loading = ref(false)

const form = ref({
	username_or_email: "",
	password: "",
	remember_me: false,
});
const error_message: Ref<undefined | string> = ref()

const schema = z.object({
	username_or_email: z.string().min(1, "El nombre de usuario o correo electrónico es requerido"),
	password: z.string().min(1, "La contraseña es requerida"),
	remember_me: z.boolean(),
});

const {log_user} = useUserStore()

const submit = async () => {
	try {
		schema.parse(form.value);
		await get_user();
	} catch (e) {
		if (e instanceof z.ZodError) {
			error_message.value = e.errors.map(err => err.message).join(", ");
		}
	}
};

const get_user = async () => {
	loading.value = true
	error_message.value = undefined
	await $fetch<UserInterface>('/api/auth/login', {
		method: 'POST',
		body: {
			username_or_email: form.value.username_or_email,
			password: form.value.password,
			remember_me: form.value.remember_me
		}
	})
		.then((data) => {
			log_user({
				id: data.id,
				username: data.username,
				email: data.email,
				token: data.token,
				role: data.role,
				is_active: data.is_active,
				created_at: data.created_at,
				modified_at: data.modified_at
			})
		})
		.catch((e) => {
			error_message.value = e.data.message
			loading.value = false
		})/*.finally(() => {
		})*/
}
</script>