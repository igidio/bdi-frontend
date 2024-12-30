<template>
	<ReservationModalCancel
		v-model:modal_status="modal_status"
		v-model:modal_data="modal_data"
		:cancel_reservation="cancel_reservation"
	/>

	<UCard>
		<template #header>{{ user_role === UserRoleEnum.client ? "Tus reservas" : "Todas las reservas" }}</template>


		<div class="flex pb-4 border-b border-gray-200 dark:border-gray-700">
			<UInput v-model="q" placeholder="Filtrar resultados"/>
		</div>
		<UTable
			:columns="columns"
			:rows="rows"
			:loading="loading"
			:sort="{ column: 'created_at', direction: 'desc' }"
		>
			<template #status-data="{row}">
				<UBadge
					variant="soft"
					:color="row.status ? 'primary' : 'red'"
				>{{ row.status ? 'Activo' : 'No activo' }}
				</UBadge>
			</template>
			<template #detail_sector-data="{row}">
				{{ row.detail_sector }}, {{ row.detail_coords }}
			</template>
			<template #options-data="{row}">
				<UButton
					v-if="row.status && user_role === UserRoleEnum.client"
					@click="open_reservation_modal(row.id)"
				>{{ row.status ? 'Cancelar reserva' : 'Volver a reservar' }}
				</UButton>

				<UDropdown :items="items(row)" v-if="user_role !== UserRoleEnum.client">
					<UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
				</UDropdown>
			</template>
		</UTable>

		<div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
			<UPagination v-model="page" :page-count="pageCount" :total="people.length"/>
		</div>


		<UAlert
			v-if="user_role === UserRoleEnum.client"
			title="Importante"
			color="primary"
			variant="soft"
		>
			<template #description>
				<p>Si deseas volver a habilitar una reserva, debes hacerlo desde
					<NuxtLink to="details" class="hyper">sectores</NuxtLink>
					.
				</p>
			</template>
		</UAlert>
	</UCard>
</template>

<script setup lang="ts">
import type {ReservationInterface} from "~/interfaces";
import ModalCancelReservation from "~/components/Detail/ModalCancelReservation.vue";
import {UserRoleEnum} from "~/enums";

const {user_role} = useUserStore()
const {$auth_fetch} = useNuxtApp()

interface DataInterface {
	reservations: ReservationInterface[]
	message: string
}

definePageMeta({
	title: 'Reservas',
	layout: "admin",
})

const q = ref('')
const modal_data: Ref<ReservationInterface> = ref({} as ReservationInterface)
const modal_status = reactive({is_loading: false, error_message: undefined, is_open: false})

const data: Ref<DataInterface> = ref({} as DataInterface);
const loading = ref(true)

const columns = [
	{
		key: 'id',
		label: 'Número de registro',
		sortable: true
	},
	...((user_role !== UserRoleEnum.client) ? [{
		key: 'user',
		label: 'Usuario',
		sortable: true
	}] : []),
	{
		key: 'created_at',
		label: 'Fecha de reserva',
		sortable: true
	}, {
		key: 'status',
		label: 'Estado',
		sortable: true
	},
	{
		key: 'detail_type',
		label: 'Disposición',
		sortable: true
	},
	{
		key: 'detail_sector',
		label: 'Coordenada',
		sortable: true
	},
	{
		key: 'options',
		label: 'Opciones',
		sortable: false
	},
]

const items = (row: any) => [
	[{
		label: 'Opción de administrador 1',
		icon: 'i-heroicons-pencil-square-20-solid',
		click: () => console.log(row.id)
	}, {
		label: 'Opción de administrador 2',
		icon: 'i-heroicons-pencil-square-20-solid'
	}], [{
		label: 'Opción de administrador 3',
		icon: 'i-heroicons-pencil-square-20-solid'
	}, {
		label: 'Opción de administrador 4',
		icon: 'i-heroicons-pencil-square-20-solid'
	}], [{
		label: 'Opción de administrador 5',
		icon: 'i-heroicons-pencil-square-20-solid'
	}]
]


const people = computed(() => (data.value.reservations && data.value.reservations.length > 0) ? data.value.reservations.map((element) => ({
	id: element.id,
	created_at: new Date(element.created_at).toLocaleString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	}),
	status: (element.is_active),
	detail_type: element.detail?.type,
	detail_coords: element.detail?.row + '-' + element.detail?.column,
	detail_id: element.detail?.id,
	detail_value: element.detail?.value,
	detail_sector: element.detail?.head?.name,
	...((user_role !== UserRoleEnum.client) && ({user: 'Nombre completo de ' + element.user?.username,}))
})) : [])
const rows = computed(() => {
	if (!q.value) {
		return people.value.slice((page.value - 1) * pageCount, (page.value) * pageCount)
	}

	return people.value.filter((person) => {
		return Object.values(person).slice((page.value - 1) * pageCount, (page.value) * pageCount).some((value) => {
			return String(value).toLowerCase().includes(q.value.toLowerCase())
		})
	})
})

const page = ref(1)
const pageCount = 6

const fetch = async () => {
	loading.value = true
	data.value = await $auth_fetch<DataInterface>('/api/reservation')
	console.log(data.value)
	loading.value = false
}

const open_reservation_modal = (id: number) => {
	const find = data.value.reservations.findLast(e => e.id === id);
	if (find === undefined) return;
	modal_data.value = find;
	modal_status.is_open = true
	//find.is_active = !find.is_active
}

const cancel_reservation = async () => {
	modal_status.is_loading = true
	if (modal_data.value === undefined) return;
	await $auth_fetch(`/api/reservation/deactivate/${modal_data.value.detail!.id}`, {
		method: 'PATCH'
	}).then(() => {
		modal_status.is_open = false;
		const find = data.value.reservations.findLast(e => e.id === modal_data.value.id);
		find && (find.is_active = false)
		useToast().add({title: 'Reserva realizada con éxito'})
	}).catch((e) => {
		modal_status.error_message = e.data.message
	}).finally(() => {
		modal_status.is_loading = false
	})
}

onMounted(async () => {
	await fetch()
})
</script>