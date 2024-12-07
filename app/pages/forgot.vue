<template>
	<AppCard>
		<div class="text-center flex flex-col">
			<span class="text-xl font-semibold">¿Olvidaste tu contraseña?</span>
		</div>
		<p>No hay problema, introduce to correo electrónico desde el cual se te enviará un acceso para restablecer tu
			contraseña:</p>
		
		<div class="flex flex-col gap-2">
			<input type="email" class="input gray">
		</div>
		
		<div class="justify-between inline-flex">
			<NuxtLink to="login" class="button ghost h-full align-middle">Volver a Inicio de sesión</NuxtLink>
			
			<button class="button primary">Enviar</button>
		</div>
	</AppCard>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "auth",
	middleware: "unauthenticated"
});
</script>