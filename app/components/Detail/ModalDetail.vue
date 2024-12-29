<template>
	<p>Una vez realizada la reserva debe tiene una semana de plazo para pagar dicho espacio, caso contrario
		el espacio volverá a estar disponible, puede cancelar la reserva en cualquier momento.</p>
	<UAlert
		v-if="error_message"
		icon="tabler:alert-hexagon"
		color="red"
		variant="subtle"
		title=""
		:description="error_message"
	/>
	<div class="flex flex-row justify-end  gap-4 w-full">
		<button class="button secondary" @click="close_modal()">Volver</button>

		<UButton
			class="button primary"
			@click="make_reservation()"
			:loading="cancel_loading"
		>
			<Icon name="tabler:address-book" size="16"/>
			Reservar
		</UButton>
	</div>
</template>

<script setup lang="ts">
import type {DetailInterface} from "~/interfaces";
import {DetailStatusEnum} from "~/enums";

const {$auth_fetch} = useNuxtApp()
const {close_modal} = useUiStore();

const {
	selected_detail,
	current_details,
	get_detail,
	change_status
} = useSectorComposable()

const error_message: Ref<undefined | string> = ref()
const cancel_loading: Ref<boolean> = ref(false)

const make_reservation = async () => {
	cancel_loading.value = true
	if (selected_detail.value && !selected_detail.value.detail.id) return;
	await $auth_fetch('/api/reservation', {
		method: 'POST',
		body: {
			id_detail: selected_detail.value?.detail.id
		}
	}).then((data) => {
		close_modal()
		useToast().add({title: 'Reserva realizada con éxito'})
		change_status(DetailStatusEnum.reservado)
		get_detail(selected_detail.value!.detail.id)
	}).catch((error) => {
		console.error(error.data)
		error_message.value = error.data.message
	}).finally(() => {
		cancel_loading.value = false
	})

}
</script>