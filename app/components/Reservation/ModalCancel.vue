<template>
	<UModal v-model="modal_status.is_open">
		<UCard>
			<template #header>
				Cancelar reserva
			</template>
			<p>Al cancelar la reserva...</p>
			<UAlert
				v-if="modal_status.error_message !== undefined"
				icon="tabler:alert-hexagon"
				color="red"
				variant="subtle"
				:description="modal_status.error_message"
			/>
			<template #footer>
				<div class="flex flex-row gap-4 justify-end w-full">
					<UButton @click="modal_status.is_open = false" variant="soft" class="px-4">Cerrar</UButton>
					<UButton @click="cancel_reservation" :loading="modal_status.is_loading">Cancelar reserva</UButton>
				</div>
			</template>
		</UCard>
	</UModal>

</template>

<script setup lang="ts">
import type {ModelRef} from "vue";

defineProps<{ cancel_reservation: () => {} }>()

const modal_status: ModelRef<{
	is_loading: boolean,
	error_message: undefined|string,
	is_open: boolean
}> = defineModel('modal_status', {
	default: {}
});
const modal_data: ModelRef<any> = defineModel('modal_data')

watch(
	() => modal_status.value.is_open,
	() => {
		modal_status.value.error_message = undefined
	}
)
</script>