<template>
	<AppCard :title="`Sector ${current_head?.sector}`" class="h-fit" v-if="current_details">
		<span>{{ current_head?.name }}</span>
		
		<span class="text-base font-bold">Disposición de espacios</span>
		
		<table>
			<tr v-for="e in disposition">
				<td class="flex items-center"><Icon name="tabler:square-filled" :class="e.color" class="mr-1" v-if="e.color"/>{{ e.name }}</td>
				<td>{{ e.value }}</td>
			</tr>
		</table>
		
		
		
		<span class="text-base font-bold">Disponibilidad</span>
		
		<table>
			<tr v-for="e in availability">
				<td class="flex items-center"><Icon name="tabler:square-filled" :class="e.color" class="mr-1" v-if="e.color"/>{{ e.name }}</td>
				<td>{{ e.value }}</td>
			</tr>
		</table>
		
	</AppCard>

</template>

<script setup lang="ts">
import {DetailStatusEnum, DetailTypeEnum} from "~/enums";

const {current_details, current_head} = useSectorComposable()

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