<template>
	<UCard>
		<template #header>
			<div class="flex flex-row">
				<UButton
					block
					color="primary"
					variant="soft"
					@click="delete_selected_detail()"
				>Cerrar
				</UButton>
			</div>
		</template>

		<div v-if="loading_detail">
			<USkeleton class="h-6 w-full mb-2" v-if="loading_detail"/>
			<div class="flex flex-col gap-4">
				<USkeleton class="h-6" v-for="i in 4"/>
			</div>
		</div>

		<div v-else>
		<span
			class="text-[16px] font-bold mb-2"
		>Espacio {{ selected_detail?.detail.value }}
		</span>

			<div class="text-sm flex flex-col gap-2">
				<div class="flex flex-col" v-for="element in elements">
					<span class="font-semibold">{{ element.name }}</span>
					<span>{{ element.value }}</span>
				</div>
			</div>
		</div>


		<div v-if="user_role === UserRoleEnum.client">
			<div
				v-if="!show_sale_info && selected_detail?.reservation_info?.is_available && selected_detail.detail.status === DetailStatusEnum.disponible"
			>
				<UButton
					color="primary"
					block
					@click="useUiStore().modal_generate({
						title: 'Reservar espacio ' + selected_detail?.detail.value,
						component: ModalDetail,
					})"
					:disabled="loading_detail"
				>Reservar
				</UButton>
			</div>

			<div
				v-if="user_role === UserRoleEnum.client && selected_detail?.reservation_info && !selected_detail.reservation_info.is_available">
				<UButton
					color="black"
					block
					@click="useUiStore().modal_generate({
						title: 'Cancelar reserva',
						component: ModalCancelReservation,
					})"
					:disabled="loading_detail"
				>
					Cancelar reserva
				</UButton>
			</div>

		</div>
	</UCard>

</template>


<script setup lang="ts">
import {computed} from "vue";
import {DetailStatusEnum, UserRoleEnum} from "~/enums";

import ModalDetail from "~/components/Detail/ModalDetail.vue";
import ModalCancelReservation from "~/components/Detail/ModalCancelReservation.vue";

const sectorComposable = useSectorComposable()
const {
	delete_selected_detail,
	selected_detail,
	loading_detail
} = sectorComposable

const {user, user_role} = useUserStore()

const show_sale_info = computed(() => {
	return ([UserRoleEnum.admin, UserRoleEnum.superuser].includes(user?.role as UserRoleEnum))
})

interface elements_interface {
	name: string,
	value: string
}

const elements: ComputedRef<elements_interface[]> = computed(() => {
	if (selected_detail.value === undefined) return [];

	let info_items: elements_interface[] = [
		{
			name: 'Coordenada',
			value: `${selected_detail.value.detail.row} - ${selected_detail?.value.detail.column}`,
		},
		{
			name: 'Sector',
			value: selected_detail.value.detail.head?.sector!,
		},
		{
			name: 'Disposición',
			value: selected_detail.value.detail.type,
		},
		{
			name: 'Disponibilidad',
			value: selected_detail.value.detail.status,
		}
	]

	if (show_sale_info.value) info_items.push(...[
		{
			name: 'Cliente',
			value: 'Nombre Apellido',
		},
		{
			name: 'Contrato',
			value: '000000000',
		},
		{
			name: 'Fecha del contrato',
			value: new Date().toLocaleDateString(),
		}
	])
	return info_items
})
</script>