<template>
	<AppCard title="Inf. del sector" class="w-[20%] h-fit" v-if="current_details">
		<ul>
			<li><b>Total espacios:</b> {{ current_details.length }}</li>
			<!--	<li><b>Capilla:</b></li>-->
			<li> <b>Centro:</b> {{ selector.centro }}</li>
			<li><b>Borde:</b> {{ selector.borde }}</li>
			<li><b>Camino:</b> {{ selector.camino }}</li>
		</ul>
		
		<span class="text-base font-bold">Disponibilidad</span>
		<ul>
			<li><b>Vendidos:</b> {{ availability.vendido }}</li>
			<li><b>Disponibles:</b> {{ availability.disponible }}</li>
			<!--	TODO -->
			<li><b>Ocupados:</b> 1</li>
			<li><b>Reservado:</b> {{ availability.reservado }}</li>
			<li><b>No disponible:</b> {{ availability.no_disponible }}</li>
		</ul>
	</AppCard>

</template>

<script setup lang="ts">
import {DetailStatusEnum, DetailTypeEnum} from "~/enums";

const { current_details } = useSectorComposable()

const selector = computed(() => ({
	camino: current_details.value.filter((detail: any) => detail.type === DetailTypeEnum.camino ).length,
	centro: current_details.value.filter((detail: any) => detail.type === DetailTypeEnum.centro ).length,
	borde: current_details.value.filter((detail: any) => detail.type === DetailTypeEnum.borde ).length,
}));

const availability = computed(() => ({
	disponible: current_details.value.filter((detail: any) => detail.status === DetailStatusEnum.disponible ).length,
	no_disponible: current_details.value.filter((detail: any) => detail.status === DetailStatusEnum.no_disponible ).length,
	reservado: current_details.value.filter((detail: any) => detail.status === DetailStatusEnum.reservado ).length,
	vendido: current_details.value.filter((detail: any) => detail.status === DetailStatusEnum.vendido ).length
}));
</script>