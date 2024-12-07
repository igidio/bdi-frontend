<template>
	<AppCard>
		<h2>Muy pronto</h2>
		<NuxtLink to="login" class="hyper">Volver a Inicio de sesión</NuxtLink>
	</AppCard>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "auth",
	middleware: "unauthenticated"
});
</script>