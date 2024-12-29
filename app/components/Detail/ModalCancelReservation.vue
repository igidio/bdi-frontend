<template>
	<div v-if="selected_detail">
		<p>Al cancelar la reserva (más detalles de lo que va a pasar):</p>
		<span v-if="error_message" class="text-sm text-red-600 dark:text-red-200">{{ error_message }}</span>
		<div class="flex flex-row justify-end gap-4 w-full">
			<button class="button secondary" @click="close_modal()">Volver</button>
			<button class="button primary" @click="cancel_reservation()">
				<Icon name="tabler:address-book" size="16"/>
				Cancelar reserva
			</button>
		</div>
	</div>
	<div v-else>
		<p>Debe seleccionar un espacio para cancelar la reserva.</p>
	</div>
</template>

<script setup lang="ts">
import {DetailStatusEnum} from "~/enums";

const loading = ref(false);
const {$auth_fetch} = useNuxtApp()
const {close_modal} = useUiStore();
const {
	selected_detail,
	current_details,
	get_detail,
	change_status
} = useSectorComposable()
const error_message: Ref<undefined | string> = ref()

const cancel_reservation = async () => {
	loading.value = true
	if (selected_detail.value && !selected_detail.value.detail.id) return;
	await $auth_fetch(`/api/reservation/deactivate/${selected_detail.value?.detail.id}`, {
		method: 'PATCH'
	}).then((data) => {
		close_modal()
		change_status(DetailStatusEnum.disponible)
		useToast().add({title: 'Reserva cancelada'})
		get_detail(selected_detail.value!.detail.id)
	}).catch((e) => {
		error_message.value = e.data.message
	}).finally(() => {
		loading.value = false
	})
}
</script>