<template>
	<div class="bg-white h-screen p-4 flex flex-col gap-2">
		<AppLogo></AppLogo>
		<hr/>
		
		<div class="flex flex-col gap-2">
			<NuxtLink v-for="(e, index) in options" :key="index" class="menu-item" :to="{name: e.to}">
				<Icon :name="e.icon" class="bg-blue-500" size="16"/>
				{{ e.name }}
			
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const options = [
	{
		name: "Inicio",
		icon: "tabler:home",
		to: "index",
	},
	{
		name: "Sectores",
		icon: "tabler:layout-grid",
		to: "details"
	},
	{
		name: "Opción 1",
		icon: "tabler:circle-number-1",
		to: ""
	},
	{
		name: "Opción 2",
		icon: "tabler:circle-number-2",
		to: ""
	},
	{
		name: "Opción 3",
		icon: "tabler:circle-number-3",
		to: ""
	},
	{
		name: "Opción 4",
		icon: "tabler:circle-number-4",
		to: ""
	},
]
</script>