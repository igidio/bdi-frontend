<template>
	<div class="flex flex-col tablet:flex-row gap-4">
		<DetailMap class="block tablet:hidden"/>
		<AppCard class="w-full">
			<select v-model="current_head" @change="get_details()" class="select gray">
				<option selected disabled :value="undefined">Selecciona un sector</option>
				<option v-for="head in heads" :key="head.id" :value="head">Sector {{ head.sector }}: {{ head.name }}</option>
			</select>
			<DetailGrid v-if="current_head"></DetailGrid>
		</AppCard>
		
		<div class="w-full tablet:w-48 gap-4 flex flex-col sticky top-20 h-full" id="info">
			<div class="hidden tablet:block">
				<DetailMap/>
			</div>
			
			<DetailInfo v-if="selected_detail && current_details"/>
			<div class="hidden tablet:block" v-else-if="current_details">
				<DetailSector class="hidden tablet:block"/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {useSectorComposable} from "~/composables/sector.composable";
const {data} = await useAsyncData('sector', async () => await $fetch('/api/head'))
const {
	heads,
	current_head,
	selected_detail,
	current_details,
	get_details
} = useSectorComposable()

heads.value = data.value as any

definePageMeta({
	title: 'Sectores',
	layout: "admin",
})
</script>