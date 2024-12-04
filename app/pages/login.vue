<template>
	
	<AppCard>
		<div class="text-center flex flex-col">
			<span class="text-xl font-semibold">Bienvenido</span>
			<span class="text-sm">¿No tienes una cuenta?, puedes <NuxtLink class="hyper" to="signup">Registrarte</NuxtLink></span>
		</div>
		
		<form>
			
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<label for="input-label" class="block font-medium dark:text-white">Correo electrónico</label>
					<input type="email" class="input gray">
				</div>
				
				<div class="flex flex-col gap-2">
					<label for="input-label" class="block font-medium dark:text-white">Contraseña</label>
					<input type="email" class="input gray">
					<NuxtLink class="hyper" to="forgot">¿Olvidaste la contraseña?.</NuxtLink>
				</div>
				
				<div class="inline-flex">
					<input
						type="checkbox"
						class="checkbox"
						id="hs-checked-checkbox"
						:checked="false"
					>
					<label for="hs-checked-checkbox" class="text-gray-500 ms-3 dark:text-neutral-400">Recuérdame</label>
				</div>
				<button class="button primary block">Iniciar sesión</button>
			</div>
			
		</form>
	</AppCard>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "auth",
});
</script>