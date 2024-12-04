<template>
	<div class="flex flex-row gap-4">
		<AppCard class="w-[80%]">
			<select v-model="current_head" @change="get_details()" class="gray">
				<option selected disabled :value="undefined">Selecciona un sector</option>
				<option v-for="head in heads" :key="head.id" :value="head">Sector {{ head.sector}}: {{ head.name }}</option>
			</select>
			<DetailGrid v-if="current_head"></DetailGrid>
		</AppCard>
		
		<div class="w-[20%] gap-4 flex flex-col">
		<DetailMap/>
		<DetailSector/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {useSectorComposable} from "~/composables/sector.composable";

//const {data} = await useAsyncData('sector', () => $fetch('http://localhost:3000/head'))
const {data} = await useAsyncData('sector', async () => await $fetch('/api/head'))
const {heads, current_head, get_details} = useSectorComposable()

heads.value = data.value as any

definePageMeta({
	title: 'Sectores',
	layout: "admin",
})
</script>