<template>
	<AppCard>
		<div class="flex flex-row">
			<button class="button secondary block" @click="delete_selected_detail()">Cerrar</button>
		</div>

		<span class="text-xl">Espacio {{ selected_detail?.detail.value }}</span>
		<table v-if="show_sale_info" class="text-sm">
			<tbody>
			<tr>
				<td>Coordenada</td>
				<td class="font-semibold">{{ selected_detail?.detail.row }}- {{ selected_detail?.detail.column }}</td>
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
		<table v-else class="text-sm">
			<tbody>
			<tr>
				<td>Coordenada</td>
				<td>{{ selected_detail?.detail.row }}- {{ selected_detail?.detail.column }}</td>
			</tr>
			<tr>
				<td>Sector</td>
				<td>{{ selected_detail?.detail.head.sector }}</td>
			</tr>
			<tr>
				<td>Disposición</td>
				<td>{{ selected_detail?.detail.type }}</td>
			</tr>
			<tr>
				<td>Disponibilidad</td>
				<td>{{ selected_detail?.detail.status }}</td>
			</tr>
			</tbody>
		</table>

		<AppModal/>

		<div v-if="user_role === UserRoleEnum.client">
			<div
				v-if="!show_sale_info && selected_detail?.reservation_info?.is_available && selected_detail.detail.status === DetailStatusEnum.disponible"
			>
				<button class="button primary block" @click="useUiStore().modal_generate({
					title: 'Reservar espacio ' + selected_detail?.detail.value,
					component: ModalDetail,
				})">Reservar</button>
			</div>

			<div v-if="user_role === UserRoleEnum.client && selected_detail?.reservation_info && !selected_detail.reservation_info.is_available">
			<button class="button black" @click="useUiStore().modal_generate({
				title: 'Cancelar reserva',
				component: ModalCancelReservation,
			})">
				Cancelar reserva
			</button>
			</div>
		</div>
	</AppCard>

</template>


<script setup lang="ts">
import {computed} from "vue";
import {DetailStatusEnum, UserRoleEnum} from "~/enums";
import {AppCard} from "#components";

import ModalDetail from "~/components/Detail/ModalDetail.vue";
import ModalCancelReservation from "~/components/Detail/ModalCancelReservation.vue";

const sectorComposable = useSectorComposable()
const {
	delete_selected_detail,

} = sectorComposable

//const {selected_detail} = toRefs(sectorComposable)
const {selected_detail} = sectorComposable

const {user, user_role} = useUserStore()

const show_sale_info = computed(() => {
	return ([UserRoleEnum.admin, UserRoleEnum.superuser].includes(user?.role as UserRoleEnum))
})
</script>