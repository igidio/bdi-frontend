<template>
	<div class="hs-dropdown relative inline-flex">
		<button
			aria-expanded="false"
			aria-label="Menu"
			id="hs-dropdown-notifications"
		>
			<Icon name="tabler:bell" size="20"/>
		</button>
		
		
		<div
			class="hs-dropdown-menu hs-dropdown-open:opacity-100 hidden dropdown"
			role="menu"
			aria-labelledby="hs-dropdown-notifications"
		>
			<div class="p-4 text-sm">
				Las notificaciones aparecerán acá
			</div>
			
		
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from "~/components/User/Button.vue";

const options = [
	{
		name: "Opciones de usuario",
		icon: "tabler:user",
		to: "",
		color: "bg-blue-500"
	},
	{
		name: "Cerrar sesión",
		icon: "tabler:logout",
		to: "",
		color: "bg-red-500"
	}
]
</script>