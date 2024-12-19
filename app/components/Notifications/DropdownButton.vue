<template>
	<div class="inline-flex">

		<div class="dropdown dropdown-end">
			<button
				tabindex="0"
			>
				<Icon name="tabler:bell" size="20"/>
			</button>

			<div tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
				<div class="p-4 text-sm">
					Las notificaciones aparecerán acá
				</div>
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import Button from "~/components/User/DropdownButton.vue";

const options = [
	{
		name: "Opciones de usuario",
		icon: "tabler:user",
		to: () => "",
		color: "bg-blue-500"
	},
	{
		name: "Cerrar sesión",
		icon: "tabler:logout",
		to: () => "",
		color: "bg-red-500"
	}
]
</script>