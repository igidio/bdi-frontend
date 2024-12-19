<template>
	<p>Al cancelar la reserva (más detalles de lo que va a pasar):</p>
	<div class="flex flex-row justify-end gap-4 w-full">
		<button class="btn" @click="close_modal()">Volver</button>
		<button class="btn btn-primary" @click="cancel_reservation()">
			<Icon name="tabler:address-book" size="16"/>
			Cancelar reserva
		</button>
		<span v-if="error_message" class="text-sm text-red-600 dark:text-red-200">{{ error_message }}</span>
	</div>
</template>

<script setup lang="ts">
const {$auth_fetch} = useNuxtApp()
const {close_modal} = useUiStore();

const error_message: Ref<undefined | string> = ref()

const cancel_reservation = () => {
	// TODO: Mensaje
}
</script>