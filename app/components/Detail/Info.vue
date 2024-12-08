<template>
	<AppCard>
		<div class="flex flex-row">
			<button class="button secondary block" @click="delete_selected_detail()">Cerrar</button>
		</div>
		
		<table v-if="show_sale_info">
			<tbody>
			<tr>
				<td>Coordenada</td>
				<td class="font-semibold">{{ selected_detail?.row }}- {{ selected_detail?.column }}</td>
			</tr>
			<tr>
				<td>Cliente</td>
				<!-- TODO: Nombre cliente -->
				<td>Nombre Apellido</td>
			</tr>
			<tr>
				<td>Contrato:</td>
				<!-- TODO: Contrato -->
				<td>{{ '000000000' }}</td>
			</tr>
			<tr>
				<td>Fecha del contrato:</td>
				<!-- TODO: Fecha contrato -->
				<td>{{ new Date() }}</td>
			</tr>
			</tbody>
		</table>
		<table v-else>
			<tbody>
			<tr>
				<td>Coordenada</td>
				<td>{{ selected_detail?.row }}- {{ selected_detail?.column }}</td>
			</tr>
			</tbody>
		</table>
	</AppCard>
</template>


<script setup lang="ts">
import {computed} from "vue";
import {DetailStatusEnum} from "~/enums";

const {
	delete_selected_detail,
	selected_detail
} = useSectorComposable()

const { user } = useUserStore()

const show_sale_info = computed(() => {
	return user?.role === 'admin' && selected_detail.value?.status === DetailStatusEnum.vendido;
})
</script>