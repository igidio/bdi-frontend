<template>
	<div class="sidebar" :class="(is_expanded) ? 'w-48' : 'w-12'">
		<button class="mb-4" @click="is_expanded = !is_expanded">
			<Icon name="tabler:menu-3" size="20"/>
		</button>
		
		<AppLogo class="w-full place-self-center"></AppLogo>
		<hr/>
		
		<div class="flex flex-col gap-2">
			<NuxtLink
				v-for="(e, index) in options"
				:key="index"
				:class="(is_expanded) ? 'menu-item' : 'py-1'"
				class="menu-item"
				:to="{name: e.to}"
			>
				<Icon :name="e.icon" class="icon" size="16"/>
				<span :class="(!is_expanded) && 'hidden'">{{ e.name }}</span>
			
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

const is_expanded = ref(true)
</script>