<template>
	<div class="flex flex-col tablet:flex-row gap-2 tablet:max-h-[calc(100vh-100px)]">

		<div class="w-full flex flex-col overflow-hidden gap-2">
			<DetailMap class="block tablet:hidden"/>
			<UCard>
				<div class="my-2">
					<select v-model="current_head" @change="get_details()" class="select gray">
						<option selected disabled :value="undefined">Selecciona un sector</option>
						<option v-for="head in heads" :key="head.id" :value="head">Sector {{ head.sector }}: {{
								head.name
							}}
						</option>
					</select>
				</div>

				<div class="overflow-scroll tablet:h-[calc(100vh-215px)]">
					<div class="h-full w-full content-center text-center" v-if="loading_head">
						<UIcon name="tabler:circle-dashed" class="h-8 w-8 bg-black/40 animate-spin dark:bg-white/40"/>
					</div>
					<DetailGrid v-if="current_head && !loading_head"/>
				</div>

			</UCard>
		</div>

		<div class="w-full tablet:w-48 gap-2 flex flex-col overflow-y-scroll menu-fade">

			<div class="hidden tablet:block">
				<DetailMap/>
			</div>

			<div id="info"></div>

			<DetailInfo v-if="selected_detail && current_details"/>

			<div class="hidden tablet:block" v-else-if="current_details">
				<DetailSector/>
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
	loading_head,
	get_details
} = useSectorComposable()

heads.value = data.value as any

definePageMeta({
	title: 'Sectores',
	layout: "admin",
})
</script>