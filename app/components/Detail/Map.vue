<template>
	<component :is="is_card ? UCard : 'div'">
		<template #header>
			Mapa
		</template>
		
		<div class="w-full">
			<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444.54 343.76">
				<polygon
					@mouseover="on_hover(7)"
					@mouseout="hovered = false"
					@click="on_click(7)"
					id="sector-f-d"
					class="sector"
					:class="current_head?.id === 7 ? 'selected' : ''"
					points="157.13 150.32 273.42 79.42 273.42 70.58 235.98 0 149.75 53.89 133.51 75.16 157.13 150.32"/>
				<polygon
					@mouseover="on_hover(6)"
					@click="on_click(6)"
					@mouseout="hovered = false"
					id="sector-f-i"
					class="sector"
					:class="current_head?.id === 6 ? 'selected' : ''"
					points="153.73 152.02 130.47 77.71 79.18 77.71 18.15 96.43 0 128.77 19.85 191.73 153.73 152.02"/>
				<polygon
					@mouseover="on_hover(3)"
					@mouseout="hovered = false"
					@click="on_click(3)"
					id="sector-c"
					class="sector"
					:class="current_head?.id === 3 ? 'selected' : ''"
					points="299.51 125.36 306.88 121.96 288.73 71.47 360.2 36.3 369.28 54.46 389.13 104.37 309.72 144.08 299.51 125.36"
				/>
				<polygon
					@mouseover="on_hover(2)"
					@mouseout="hovered = false"
					@click="on_click(2)"
					id="sector_b"
					data-name="sector b"
					class="sector"
					:class="current_head?.id === 2 ? 'selected' : ''"
					points="346.02 208.75 348.86 207.05 347.44 202.32 376.66 187.19 384.03 201.94 416.36 184.92 391.97 115.72 317.66 152.59 346.02 208.75"
				/>
				<path
					@mouseover="on_hover(5)"
					@mouseout="hovered = false"
					@click="on_click(5)"
					id="sector-e"
					class="sector"
					:class="current_head?.id === 5 ? 'selected' : ''"
					d="m297.47,171.58l-126.72,65.53-26.71-10.18c-5.96-2.27-11.73-4.21-18.11-4l-16.53-.5c-1.45-.05-2.9.11-4.32.45l-64.24,15.66c-.74.18-1.51.12-2.21-.17l-4.72-1.97c-.64-.27-1.13-.8-1.33-1.46l-10.83-34.69,136.23-41.95.15.02c-.65,2.14-1,4.41-1,6.76,0,12.84,10.41,23.26,23.26,23.26s22.19-9.38,23.18-21.31c19.04-4.75,38.32-9.3,57.65-11.33,6.82-.57,13.95-1.14,20.38.7,5,1.84,10.73,8.25,15.87,15.2Z"
				/>
				<path
					@mouseover="on_hover(4)"
					@mouseout="hovered = false"
					@click="on_click(4)"
					id="sector-d"
					class="sector"
					:class="current_head?.id === 4 ? 'selected' : ''"
					d="m342.42,238.23l-78.65,41.42-88.49-39.71,124.73-64.82c3.43,4.89,6.46,9.69,8.65,13.04,8.76,13.64,16.54,27.97,26,41.33,2.21,3,4.72,6.23,7.75,8.74Z"
				/>
				<path
					@mouseover="on_hover(1)"
					@mouseout="hovered = false"
					@click="on_click(1)"
					id="sector-a"
					class="sector"
					:class="current_head?.id === 1 ? 'selected' : ''"
					d="m402.66,283.93l-88.41,44.51s-6.24-18.15-13.61-22.12-19.29-18.15-32.33-24.39l78.55-40.51c2.74,1.89,5.52,3.74,8.44,5.58,7.05,4.45,14.58,7.72,21.73,11.66,3.66,1.99,7.32,4.06,10.96,6.17,2.56,1.46,4.59,3.36,6.55,5.67,3,3.61,5.7,8.21,8.13,13.44Z"
				/>
				<g>
					<path class="path"
					      d="m444.54,332.18l-25.56,11.58c-3.04-24.75-10.69-59.71-23.88-75.63-1.95-2.31-3.98-4.21-6.55-5.67-3.64-2.11-7.29-4.18-10.96-6.17-7.15-3.94-14.69-7.2-21.73-11.66-4.08-2.56-7.88-5.17-11.7-7.85-3.57-2.6-6.44-6.27-8.93-9.65-9.47-13.36-17.24-27.69-26-41.33-5.85-8.93-17.73-28.35-27.07-31.78-6.43-1.84-13.56-1.26-20.38-.7-23.35,2.45-46.63,8.58-69.52,14.31l-11.63,3.02c-3.89.96-7.69,2.28-11.74,2.55l-4.24-15.3c3.7-1.87,7.67-2.66,11.55-3.78,26.61-6.85,86.56-24.89,111.45-16.69,12.52,4.15,22.25,18.62,29.37,28.95,11.21,16.64,20.15,34.8,31.41,51.23,1.58,2.17,3.06,4.22,4.91,5.87.12.1,1.25.92,1.41,1.02,6.39,4.65,12.42,8.54,19.52,12.03,7.2,3.58,14.67,7.5,21.69,11.53,8.36,4.44,13.75,12.55,18.82,20.13,12.96,19.82,22.17,41.72,29.75,63.98Z"/>
					<circle class="path" cx="180.39" cy="164.42" r="20.99"/>
				</g>
			</svg>
		</div>
		
		<div class="h-8">
			<div v-if="hovered || current_head" class="flex flex-col text-center">
				<span class="font-semibold">Sector {{ hovered ? sector_name.sector : current_head?.sector }}</span>
				<span class="text-sm">{{ hovered ? sector_name.name : current_head?.name }}</span>
			</div>
		
		</div>
		
		<DetailSector v-if="current_details && current_details.length > 0" :is_card="false" class="block tablet:hidden text-center"/>
	</component>
</template>

<script setup lang="ts">
import {UCard} from "#components";

interface Props {
	is_card?: boolean,
}
withDefaults(defineProps<Props>(), {
	is_card: true,
})

import Card from "~/components/App/Card.vue";

const {heads, current_head, get_details, current_details} = useSectorComposable()
const sector_name: Ref<{ name: string, sector: string }> = ref({} as { name: string, sector: string })

const hovered = ref(false)

const on_hover = (sector: number) => {
	hovered.value = true
	sector_name.value = {sector: heads.value[sector - 1]!.sector, name: heads.value[sector - 1]!.name}
}
const on_click = (sector: number) => {
	current_head.value = heads.value[sector - 1]
	get_details()
}
</script>