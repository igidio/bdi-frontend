<template>
	<p class="py-4">Una vez realizada la reserva debe tiene una semana de plazo para pagar dicho espacio, caso contrario
		el espacio volverá a estar disponible, puede cancelar la reserva en cualquier momento.</p>
	<div class="flex flex-row justify-end  gap-4 w-full">
		<button class="btn" @click="close_modal()">Volver</button>

		<button
			class="btn btn-primary"
			@click="make_reservation()"
		>
			<Icon name="tabler:address-book" size="16"/>
			Reservar
		</button>

		<span v-if="error_message" class="text-sm text-red-600 dark:text-red-200">{{ error_message }}</span>
	</div>
</template>

<script setup lang="ts">
const {$auth_fetch} = useNuxtApp()
const {close_modal} = useUiStore();

const {
	selected_detail
} = useSectorComposable()
const error_message: Ref<undefined | string> = ref()

const make_reservation = async () => {
	const a = await $auth_fetch('/api/reservation', {
		method: 'POST',
		body: {
			id_detail: selected_detail.value?.detail.id
		}
	}).then((data) => {
		console.log(data)
		close_modal()
		// TODO: Add success message
	}).catch((error) => {
		console.error(error.data)
		error_message.value = error.data.message
	})
}
</script>