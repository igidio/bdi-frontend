<template>
	<AppCard class="">
		<div class="flex flex-row">
			<button class="button secondary block" @click="delete_selected_detail()">Cerrar</button>
		</div>

		<span class="text-xl font-semibold">Espacio {{ selected_detail?.detail.value }}</span>

		<div class="text-sm">
			<div class="flex flex-col mb-2" v-for="element in elements">
				<span class="font-semibold">{{ element.name }}</span>
				<span>{{ element.value }}</span>
			</div>
		</div>


		<div v-if="user_role === UserRoleEnum.client">
			<div
				v-if="!show_sale_info && selected_detail?.reservation_info?.is_available && selected_detail.detail.status === DetailStatusEnum.disponible"
			>
				<button class="button primary block" @click="useUiStore().modal_generate({
					title: 'Reservar espacio ' + selected_detail?.detail.value,
					component: ModalDetail,
				})">Reservar
				</button>
			</div>

			<div
				v-if="user_role === UserRoleEnum.client && selected_detail?.reservation_info && !selected_detail.reservation_info.is_available">
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

const elements: ComputedRef<{ name: string, value: string }[]> = computed(() => [
	(selected_detail) && ({
		name: 'Coordenada',
		value: `${selected_detail.value.detail.row} - ${selected_detail?.value.detail.column}`,
	}),
	{
		name: 'Sector',
		value: selected_detail.value.detail.head.sector,
	},
	{
		name: 'Disposición',
		value: selected_detail.value.detail.type,
	},
	{
		name: 'Disponibilidad',
		value: selected_detail.value.detail.status,
	},
	(show_sale_info.value) && ({
		name: 'Cliente',
		value: 'Nombre Apellido',
	}),
	(show_sale_info.value) && ({
		name: 'Contrato',
		value: '000000000',
	}),
	(show_sale_info.value) && ({
		name: 'Fecha del contrato',
		value: new Date().toLocaleDateString(),
	}),
])
</script>