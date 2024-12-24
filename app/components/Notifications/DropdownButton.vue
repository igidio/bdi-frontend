<template>
	<div class="inline-flex">


		<UPopover>
			<UIcon name="tabler:bell" size="20"/>
			<template #panel>
				<div class="p-4">
					<div class="p-4 text-sm">
						Las notificaciones aparecerán acá
					</div>
				</div>
			</template>
		</UPopover>

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