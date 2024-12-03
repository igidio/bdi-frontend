<template>
	<div class="flex flex-row gap-4">
		<AppCard title="Sectores" class="w-[80%]">
			<select v-model="current_head" @change="get_details()">
				<option selected disabled :value="undefined">Selecciona un sector</option>
				<option v-for="head in heads" :key="head.id" :value="head">{{ head.name }}</option>
			</select>
			<DetailGrid v-if="current_head"></DetailGrid>
		</AppCard>
		
		<DetailSector/>
	</div>
</template>

<script setup lang="ts">
import {useSectorComposable} from "~/composables/sector.composable";

const {data} = await useAsyncData('sector', () => $fetch('http://localhost:3000/head'))
const {heads, current_head, current_details} = useSectorComposable()

heads.value = data.value as any

const get_details = async () => {
	if (current_head.value === undefined) return
	const data = await $fetch(`api/detail/sector/${current_head.value?.id}`)
	current_details.value = data as any
}
</script>