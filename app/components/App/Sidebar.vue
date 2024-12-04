<template>
	<div class="bg-white h-screen p-4 flex flex-col gap-2">
		<AppLogo></AppLogo>
		<hr/>
		
		<div class="flex flex-col gap-2">
			<button v-for="e in elements" class="menu-item">
				<Icon :name="e.icon" class="bg-blue-500" size="16"/>
				{{ e.name }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
const elements = [
	{
		name: "Inicio",
		icon: "tabler:home-filled",
		to: "",
	},
	{
		name: "Sectores",
		icon: "tabler:layout-grid-filled",
		to: ""
	},
	{
		name: "Opción 1",
		icon: "tabler:circle-number-1-filled",
		to: ""
	},
	{
		name: "Opción 2",
		icon: "tabler:circle-number-2-filled",
		to: ""
	},
	{
		name: "Opción 3",
		icon: "tabler:circle-number-3-filled",
		to: ""
	},
	{
		name: "Opción 4",
		icon: "tabler:circle-number-3-filled",
		to: ""
	},
]
</script>