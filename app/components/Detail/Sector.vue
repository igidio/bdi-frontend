<template>
	<component :is="is_card ? Card : 'div'" :title="`Sector ${current_head?.sector}`" class="h-fit">
		<span v-if="is_card">{{ current_head?.name }}</span>

		<USkeleton class="h-4 my-2" v-if="loading_head" />
		<span class="text-sm font-bold" v-else>Disposición de espacios</span>

		<div class="flex flex-col gap-2" v-if="loading_head">
			<USkeleton class="h-2" v-for="_ in 4" />
		</div>

		<table v-else>
			<tr v-for="e in disposition" class="text-sm">
				<td class="flex items-center">
					<Icon name="tabler:square-filled" :class="e.color" class="mr-1" v-if="e.color"/>
					{{ e.name }}
				</td>
				<td>{{ e.value }}</td>
			</tr>
		</table>

		<USkeleton class="h-4 my-2" v-if="loading_head" />
		<span class="font-bold text-sm" v-else>Disponibilidad</span>

		<div class="flex flex-col gap-2" v-if="loading_head">
			<USkeleton class="h-2" v-for="_ in 4" />
		</div>
		
		<table v-else>
			<tr v-for="e in availability" class="text-sm">
				<td class="flex items-center">
					<Icon name="tabler:square-filled" :class="e.color" class="mr-1" v-if="e.color"/>
					{{ e.name }}
				</td>
				<td>{{ e.value }}</td>
			</tr>
		</table>

	</component>

</template>

<script setup lang="ts">
interface Props {
	is_card?: boolean
}
withDefaults(defineProps<Props>(), {
	is_card: true
})

import {DetailStatusEnum, DetailTypeEnum} from "~/enums";
import Card from "~/components/App/Card.vue";

const {current_details, current_head, loading_head} = useSectorComposable()

// TODO	Capilla
const disposition = computed(() => [
	{
		name: 'Camino',
		value: current_details.value!.filter((detail: any) => detail.type === DetailTypeEnum.camino).length,
		color: 'bg-emerald-400'
	},
	{
		name: 'Centro',
		value: current_details.value!.filter((detail: any) => detail.type === DetailTypeEnum.centro).length,
		color: 'bg-yellow-400'
	},
	{
		name: 'Borde',
		value: current_details.value!.filter((detail: any) => detail.type === DetailTypeEnum.borde).length,
		color: 'bg-orange-400'
	},
	{
		name: 'Total',
		value: current_details.value?.length,
		color: 'bg-white'
	},
]);

// TODO: Ocupados
const availability = computed(() => [
	{
		name: 'Disponibles',
		value: current_details.value!.filter((detail: any) => detail.status === DetailStatusEnum.disponible).length,
		color: 'bg-white'
	},
	{
		name: 'Vendidos',
		value: current_details.value!.filter((detail: any) => detail.status === DetailStatusEnum.vendido).length,
		color: 'bg-emerald-100'
	},
	{
		name: 'Reservado',
		value: current_details.value!.filter((detail: any) => detail.status === DetailStatusEnum.reservado).length,
		color: 'bg-yellow-100'
	},
	{
		name: 'No disponible',
		value: current_details.value!.filter((detail: any) => detail.status === DetailStatusEnum.no_disponible).length,
		color: 'bg-fuchsia-200'
	}
]);
</script>