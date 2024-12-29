<template>
	<ReservationModalCancel
		v-model:modal_is_open="modal_is_open"
		v-model:modal_data="modal_data"
		:cancel_reservation="cancel_reservation"
	/>

	<AppCard>
		<h2>Tus reservas</h2>
		<div>
			<div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
				<UInput v-model="q" placeholder="Filtrar resultados"/>
			</div>
			<UTable :columns="columns" :rows="rows" :loading="loading" :sort="{ column: 'created_at', direction: 'desc' }">
				<template #options-data="{row }">
					<UButton
						v-if="row.status"
						@click="open_reservation_modal(row.id)"
					>{{ row.status ? 'Cancelar reserva' : 'Volver a reservar' }}
					</UButton>
				</template>
			</UTable>

			<div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
				<UPagination v-model="page" :page-count="pageCount" :total="people.length"/>
			</div>
		</div>
	</AppCard>
</template>

<script setup lang="ts">
import type {ReservationInterface} from "~/interfaces";
import ModalCancelReservation from "~/components/Detail/ModalCancelReservation.vue";

const {set_selected_detail} = useSectorComposable()
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
const modal_is_open = ref(false)
const modal_data: Ref<ReservationInterface> = ref({} as ReservationInterface)

const data: Ref<DataInterface> = ref({} as DataInterface);
const loading = ref(true)

const columns = [
	{
		key: 'id',
		label: 'Número de registro',
		sortable: true
	},
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
		key: 'detail_coords',
		label: 'Coordenada',
		sortable: true
	},
	{
		key: 'options',
		label: 'Opciones',
		sortable: false
	}
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
	status: (element.is_active) && 'Activa' || 'No activa',
	detail_type: element.detail?.type,
	detail_coords: element.detail?.row + '-' + element.detail?.column,
	detail_id: element.detail?.id,
	detail_value: element.detail?.value,
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
	modal_is_open.value = true
	//find.is_active = !find.is_active
}

const cancel_reservation = async () => {
	if (modal_data.value === undefined) return;
	await $auth_fetch(`/api/reservation/deactivate/${modal_data.value.detail!.id}`, {
		method: 'PATCH'
	}).then(() => {
		modal_is_open.value = false;
		const find = data.value.reservations.findLast(e => e.id === modal_data.value.id);
		find && (find.is_active = false)
		useToast().add({title: 'Reserva realizada con éxito'})
	}).catch((e) => {
		console.log(e)
	})
}

onMounted(async () => {
	await fetch()
})
</script>